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
      // if it's a unit string, return it
      if (isNaN(parseInt(`${value}`, 10))) {
        return value;
      }
      // if the user supplied a number, assume pixels
      return `${parseInt(`${value}`, 10)}px`;
  }
};

export const calcTopOffset = lineHeight =>
  `${lineHeight / -5.25 * (lineHeight / 1.5)}em`;
export const calcBottomOffset = lineHeight =>
  `${lineHeight / -3.5 * (lineHeight / 1.5)}em`;

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
  const topOffset = calcTopOffset(lineHeight);
  const bottomOffset = calcBottomOffset(lineHeight);

  if (!spacing) {
    // this is default 'no spacing', will align adjacent elements
    // to the cap and baseline directly
    return `${topOffset} 0 ${bottomOffset} 0`;
  }

  if (_.isPlainObject(spacing)) {
    const top = _.get(spacing, 'top', _.get(spacing, 'vertical', '0px'));
    const right = _.get(spacing, 'right', _.get(spacing, 'horizontal', '0px'));
    const bottom = _.get(spacing, 'bottom', _.get(spacing, 'vertical', '0px'));
    const left = _.get(spacing, 'left', _.get(spacing, 'horizontal', '0px'));

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

const userSpacing = userTextSpacingWithLineHeight(0);
// the default global line height for text is 1.5
userSpacing.text = userTextSpacingWithLineHeight(1.5);
userSpacing.text.withLineHeight = userTextSpacingWithLineHeight;
// allow static access to power functions
userSpacing.withLineHeight = userTextSpacingWithLineHeight;

export default userSpacing;
