import styled, { keyframes } from 'styled-components';
import get from 'extensions/themeGet';

const openAnimation = keyframes`
  from {
    clip-path: circle(0% at 0% 0%);
  }

  to {
    clip-path: circle(200% at 0% 50%);
  }
`;

export default styled.div`
  background: var(--colors-background-default);
  color: inherit;

  padding: var(--spacing-small) var(--spacing-medium);

  border-radius: 3px;
  border-style: solid;
  border-width: var(--thicknesses-normal);
  border-color: var(--colors-border-medium);

  box-shadow: var(--shadows-short);

  max-width: 300px;

  position: absolute;
  z-index: 1;
  left: 100%;
  top: 50%;
  transform: translateX(10px) translateY(-50%);
  white-space: nowrap;

  animation: ${openAnimation} 0.2s ease-in-out;
  animation-fill-mode: forwards;
`;
