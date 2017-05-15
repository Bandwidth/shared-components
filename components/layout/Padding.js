import styled from 'styled-components';
import PropTypes from 'prop-types';

const normalize = (size) => {
  if (!size) {
    return 'medium';
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

const getPadding = (theme, size) => {
  if (theme.padding[normalize(size)]) {
    return theme.padding[normalize(size)];
  }

  return size;
}

const Padding = styled.div`
  ${({ size, theme }) => `padding: ${getPadding(theme, size)};`}

  ${({ top, theme }) => top ? `padding-top: ${getPadding(theme, top)};` : ''}
  ${({ bottom, theme }) => bottom ? `padding-bottom: ${getPadding(theme, bottom)};` : ''}
  ${({ left, theme }) => left ? `padding-left: ${getPadding(theme, left)};` : ''}
  ${({ right, theme }) => right ? `padding-right: ${getPadding(theme, right)};` : ''}
`;

Padding.propTypes = {
  size: PropTypes.string,
  top: PropTypes.string,
  bottom: PropTypes.string,
  left: PropTypes.string,
  right: PropTypes.string,
};

Padding.defaultProps = {
  size: 'md',
  top: null,
  bottom: null,
  left: null,
  right: null,
};

Padding.usage = `
# Padding

An experimental component which just adds some padding around something else, based on some pre-defined sizes our designers like. Since developers end up implementing their own padding a lot, it might be useful to include this generic utility. Hopefully it generalizes well.

You can also specify a custom padding for any side, i.e. \`top="48px"\`. This is probably a bad idea.

\`\`\`
<Padding size="sm" bottom="lg">Some content</Padding>
\`\`\`
`;

export default Padding;
