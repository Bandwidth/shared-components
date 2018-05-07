import styled, { keyframes } from 'styled-components';

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
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.2);

  & > * {
    width: 100%;
    height: 100%;
  }
`;
