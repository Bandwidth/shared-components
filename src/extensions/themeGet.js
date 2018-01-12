import { get } from 'lodash';
import { NAMESPACE } from '../theme';

const createGetter = key => props => {
  const result = get(props, `theme.${NAMESPACE}.${key}`);
  if (!result) {
    throw new Error(`Could not find value for theme style getter ${key}!`);
  }
  return result;
};

/**
 * Creates a getter which will retrieve the specified value from
 * a provided object which contains a `theme`. Use this to create
 * a function to pass to a styled component to select a theme value.
 *
 * Example usage:
 *
 * styled.div`
 *   color: ${themeGet('colors.primary.default')};
 * `;
 */
const themeGet = key => createGetter(key);

const createIf = existingConditions => (conditionFn, key) => {
  const chain = () => {
    throw new Error('themeGet.if() chains must be terminated by .else()');
  };

  const conditions = existingConditions.concat({
    test: conditionFn,
    themeKey: key,
  });

  chain.if = createIf(conditions);

  chain.else = elseKey => props => {
    const matched = conditions.find(({ test }) => test(props));
    if (matched) {
      return createGetter(matched.themeKey)(props);
    } else if (elseKey) {
      // if user provided an else key, try to get it from theme
      try {
        return createGetter(elseKey)(props);
      } catch (err) {
        // if not in theme, treat it as a literal value
        return elseKey;
      }
    } else {
      return '';
    }
  };

  return chain;
};

themeGet.if = createIf([]);

export default themeGet;
