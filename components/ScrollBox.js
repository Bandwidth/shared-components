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

const ScrollBox = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  ${({ animateIn }) => {
    if (animateIn) {
      return css`
        animation: ${appearAnimation} 0.5s ease;
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
    background: none;
  }
`;

ScrollBox.defaultProps = {
  animateIn: true,
};

export default ScrollBox;
