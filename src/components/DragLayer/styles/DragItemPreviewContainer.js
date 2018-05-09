import styled, { keyframes } from 'styled-components';
import get from 'extensions/themeGet';

const pickupAnimation = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(4deg);
  }
`;

export default styled.div`
  animation: ${pickupAnimation} 0.3s;
  animation-fill-mode: forwards;
  will-change: transform;
  display: block;
  pointer-events: none;
  box-shadow: ${get('shadows.long')};

  & > * {
    width: 100%;
    height: 100%;
  }
`;
