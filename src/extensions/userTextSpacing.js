/**
 * EXPERIMENTAL
 *
 * Takes a user's `spacing` prop and converts it into margins
 * which can be applied to text elements so that they are spaced
 * from the cap-line and baseline, rather than the element bounds.
 *
 * This is accomplished by calculating margin with offsets of
 * em values to 'dig' into the element a bit to reach the cap and baselines.
 * These em values are based on visual inspection and would vary
 * by font.
 *
 * Passing props as a whole so that we have access to dynamic theme
 * information.
 */

import _ from 'lodash';
import themeGet from './themeGet';

const getSize = (value, props) => {
  switch (`${value}`.toLowerCase()) {
    case 'xs':
    case 'extraSmall':
      return themeGet('spacing.extraSmall')(props);
    case 'sm':
    case 'small':
      return themeGet('spacing.small')(props);
    case 'md':
    case 'medium':
      return themeGet('spacing.medium')(props);
    case 'lg':
    case 'large':
      return themeGet('spacing.large')(props);
    case 'xl':
    case 'extraLarge':
      return themeGet('spacing.extraLarge')(props);
    default:
      return value;
  }
};

const userTextSpacingWithLineHeight = lineHeight => props => {
  const { spacing } = props;

  /* these offset values collapse the outer element boundaries so that
   * adjacent layout aligns with the cap and baseline of the text inside.
   *
   * This logic is a little fuzzy. Offsets of -0.25em and -0.5em work
   * perfectly for a line height of 1.5, but they start to drift as it gets
   * smaller or larger, so we further scale the value based on its difference
   * from 1.5. Experiments suggest this produces reasonably accurate results.
   */
  const topOffset = `${lineHeight / -6.0 * (lineHeight / 1.5)}em`;
  const bottomOffset = `${lineHeight / -3.0 * (lineHeight / 1.5)}em`;

  if (!spacing) {
    // this is default 'no spacing', will align adjacent elements
    // to the cap and baseline directly
    return `${topOffset} 0 ${bottomOffset} 0`;
  }

  if (_.isPlainObject(spacing)) {
    const top = _.get(spacing, 'top', _.get(spacing, 'vertical', 0));
    const right = _.get(spacing, 'right', _.get(spacing, 'horizontal', 0));
    const bottom = _.get(spacing, 'bottom', _.get(spacing, 'vertical', 0));
    const left = _.get(spacing, 'left', _.get(spacing, 'horizontal', 0));

    return `calc(${topOffset} + ${getSize(top, props)}) ${getSize(
      right,
      props,
    )} calc(${bottomOffset} + ${getSize(bottom, props)}) ${getSize(
      left,
      props,
    )}`;
  } else if (_.isString(spacing)) {
    const size = getSize(spacing, props);
    return `calc(${topOffset} + ${size}) ${size} calc(${bottomOffset} + ${size}) ${size}`;
  }

  throw new Error(
    `Invalid spacing prop value ${spacing}, must be a single CSS value string or object { top, right, bottom, left }`,
  );
};

// the default global line height is 1.5
const userTextSpacing = userTextSpacingWithLineHeight(1.5);
// allow static access to power functions
userTextSpacing.withLineHeight = userTextSpacingWithLineHeight;

export default userTextSpacing;
