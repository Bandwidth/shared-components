import styled, { keyframes } from 'styled-components';

const pickupAnimation = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(-3deg);
  }
`;

export default styled.div`
  animation: ${pickupAnimation} 0.3s;
  animation-fill-mode: forwards;
  display: block;
  pointer-events: none;

  & > * {
    width: 100%;
    height: 100%;
  }
`;
