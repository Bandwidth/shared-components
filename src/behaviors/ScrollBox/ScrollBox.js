import styled, { css, keyframes } from 'styled-components';

const appearAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ScrollBox = styled.div.withConfig({ displayName: 'ScrollBox' })`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-height: 100%;

  ${({ animateIn }) => {
    if (animateIn) {
      return css`
        animation: ${appearAnimation} 0.3s ease;
      `;
    }

    return '';
  }}

  &::-webkit-scrollbar {
    width: 0.5em;
    height: 0.5em;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.25);
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.gutter};
  }
`;

ScrollBox.defaultProps = {
  animateIn: false,
};

ScrollBox.usage = `
# ScrollBox

ScrollBox lays out content vertically via flexbox, and allows its content to scroll vertically. It also includes an optional little animation as content appears. You can turn this on with \`animateIn\`.

\`\`\`
<ScrollBox animateIn>
  <!-- content -->
</ScrollBox>
\`\`\`
`;

export default ScrollBox;
