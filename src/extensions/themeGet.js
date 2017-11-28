import { get } from 'lodash';
import { NAMESPACE } from '../theme';

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
export default key => props => {
  const result = get(props, `theme.${NAMESPACE}.${key}`);
  if (!result) {
    throw new Error(`Could not find value for theme style getter ${key}!`);
  }
  return result;
};
