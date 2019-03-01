import styled from 'styled-components';
import PropTypes from 'prop-types';
import get from 'extensions/themeGet';

const normalize = (size?: string) => {
  if (!size) {
    return 'large';
  }

  switch (size) {
    case 'xs':
    case 'extraSmall':
      return 'extraSmall';
    case 'sm':
    case 'small':
      return 'small';
    case 'lg':
    case 'large':
      return 'large';
    case 'xl':
    case 'extraLarge':
      return 'extraLarge';
    case 'md':
    case 'medium':
      return 'medium';
    default:
      return size;
  }
};

const getSpacing = (props: SpacingProps, size?: string) => {
  try {
    return get(`spacing.${normalize(size)}`)(props);
  } catch (err) {
    return size;
  }
};

interface SpacingProps {
  /**
   * The default size to be applied to all directions. [xs, sm, md, lg, xl] or a CSS dimension.
   */
  size?: string;
  /**
   * The top spacing size. [xs, sm, md, lg, xl] or a CSS dimension.
   */
  top?: string;
  /**
   * The bottom spacing size. [xs, sm, md, lg, xl] or a CSS dimension.
   */
  bottom?: string;
  /**
   * The left spacing size. [xs, sm, md, lg, xl] or a CSS dimension.
   */
  left?: string;
  /**
   * The right spacing size. [xs, sm, md, lg, xl] or a CSS dimension.
   */
  right?: string;
  /**
   * Adds a class name to the element.
   */
  className?: string;
  /**
   * Adds an id to the element.
   */
  id?: string;
}

export const Spacing = styled.div<SpacingProps>`
  ${props => `padding: ${getSpacing(props, props.size)};`} ${props =>
  props.top ? `padding-top: ${getSpacing(props, props.top)};` : ''} ${props =>
  props.bottom
    ? `padding-bottom: ${getSpacing(props, props.bottom)};`
    : ''} ${props =>
  props.left
    ? `padding-left: ${getSpacing(props, props.left)};`
    : ''} ${props =>
  props.right ? `padding-right: ${getSpacing(props, props.right)};` : ''};
`;

Spacing.defaultProps = {
  size: 'lg',
};

export default Spacing;
