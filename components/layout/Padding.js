import styled from 'styled-components';
import PropTypes from 'prop-types';

const sizePropType = PropTypes.oneOf([
  'extraSmall',
  'xs',
  'small',
  'sm',
  'medium',
  'md',
  'large',
  'lg',
  'extraLarge',
  'xl'
]);

const normalize = (size) => {
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
    default:
      return 'medium';
  }
}

const Padding = styled.div`
  ${({ size, theme }) => `padding: ${theme.padding[normalize(size)]};`}

  ${({ top, theme }) => top ? `padding-top: ${theme.padding[normalize(top)]};` : ''}
  ${({ bottom, theme }) => bottom ? `padding-bottom: ${theme.padding[normalize(bottom)]};` : ''}
  ${({ left, theme }) => left ? `padding-left: ${theme.padding[normalize(left)]};` : ''}
  ${({ right, theme }) => right ? `padding-right: ${theme.padding[normalize(right)]};` : ''}
`;

Padding.propTypes = {
  size: sizePropType,
  top: sizePropType,
  bottom: sizePropType,
  left: sizePropType,
  right: sizePropType,
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

\`\`\`
<Padding size="sm" bottom="lg">Some content</Padding>
\`\`\`
`;

export default Padding;
