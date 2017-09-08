import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
import sharedComponent from '../../sharedComponent';

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

ScrollBox.propTypes = {
  /**
   * Whether or not to animate the contents as they are first rendered.
   */
  animateIn: PropTypes.bool,
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
}

ScrollBox.defaultProps = {
  animateIn: false,
  id: null,
  className: null,
};

export default sharedComponent(`
# ScrollBox

ScrollBox lays out content vertically via flexbox, and allows its content to scroll vertically. It also includes an optional little animation as content appears. You can turn this on with \`animateIn\`.

\`\`\`
<ScrollBox animateIn>
  <!-- content -->
</ScrollBox>
\`\`\`
`)(ScrollBox);
