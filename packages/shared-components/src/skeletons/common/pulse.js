import styled, { keyframes } from 'styled-components';

export default keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: var(--skeleton-pulse-opacity);
  }
`;
