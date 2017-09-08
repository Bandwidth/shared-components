import styled from 'styled-components';
import sharedComponent from '../../sharedComponent';
import PropTypes from 'prop-types';

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

const getSpacing = (theme, size) => {
  if (theme.padding[normalize(size)]) {
    return theme.padding[normalize(size)];
  }

  return size;
}

const Spacing = styled.div`
  ${({ size, theme }) => `padding: ${getSpacing(theme, size)};`}

  ${({ top, theme }) => top ? `padding-top: ${getSpacing(theme, top)};` : ''}
  ${({ bottom, theme }) => bottom ? `padding-bottom: ${getSpacing(theme, bottom)};` : ''}
  ${({ left, theme }) => left ? `padding-left: ${getSpacing(theme, left)};` : ''}
  ${({ right, theme }) => right ? `padding-right: ${getSpacing(theme, right)};` : ''}
`;

Spacing.propTypes = {
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

Spacing.defaultProps = {
  size: 'lg',
  top: null,
  bottom: null,
  left: null,
  right: null,
  className: null,
  id: null,
};

export default sharedComponent(`
An experimental component which just adds some padding around something else, based on some pre-defined sizes our designers like. Since developers end up implementing their own padding a lot, it might be useful to include this generic utility. Hopefully it generalizes well.

You can also specify a custom padding for any side, i.e. \`top="48px"\`. This is probably a bad idea.

\`\`\`
<Spacing size="sm" bottom="lg">Some content</Spacing>
\`\`\`
`)(Spacing);
