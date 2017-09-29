import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../../theme';

const select = theme
  .register('Spacing', ({ spacing }) => ({
    ...spacing,
  }))
  .createSelector();

const normalize = (size) => {
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
}

const getSpacing = (props, size) =>
  select(normalize(size))(props) || size;

const SpacingImpl = theme.connect(styled.div`
  ${(props) => `padding: ${getSpacing(props, props.size)};`}

  ${(props) => props.top ? `padding-top: ${getSpacing(props, props.top)};` : ''}
  ${(props) => props.bottom ? `padding-bottom: ${getSpacing(props, props.bottom)};` : ''}
  ${(props) => props.left ? `padding-left: ${getSpacing(props, props.left)};` : ''}
  ${(props) => props.right ? `padding-right: ${getSpacing(props, props.right)};` : ''}
`);

export const Spacing = (props) => <SpacingImpl {...props} />;

Spacing.propTypes = SpacingImpl.propTypes = {
  /**
   * The default size to be applied to all directions. [xs, sm, md, lg, xl] or a CSS dimension.
   */
  size: PropTypes.string,
  /**
   * The top spacing size. [xs, sm, md, lg, xl] or a CSS dimension.
   */
  top: PropTypes.string,
  /**
   * The bottom spacing size. [xs, sm, md, lg, xl] or a CSS dimension.
   */
  bottom: PropTypes.string,
  /**
   * The left spacing size. [xs, sm, md, lg, xl] or a CSS dimension.
   */
  left: PropTypes.string,
  /**
   * The right spacing size. [xs, sm, md, lg, xl] or a CSS dimension.
   */
  right: PropTypes.string,
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
};

SpacingImpl.defaultProps = {
  size: 'lg',
  top: null,
  bottom: null,
  left: null,
  right: null,
  className: null,
  id: null,
};

export default SpacingImpl;
