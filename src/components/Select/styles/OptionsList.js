import styled, { keyframes } from 'styled-components';
import { themeGet } from 'extensions';

const expand = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export default styled.div`
  background-color: ${themeGet('colors.background.default')};
  border: ${themeGet('thicknesses.wide')} solid
    ${themeGet('colors.border.medium')};
  box-shadow: ${themeGet('shadows.short')};
  box-sizing: border-box;
  max-height: 200px;
  z-index: 1000000;
  -webkit-overflow-scrolling: touch;
  overflow: hidden;
  animation: ${expand} 200ms;

  &[data-placement='bottom'] {
    border-top-width: 0;
  }
  &[data-placement='top'] {
    border-bottom-width: 0;
  }
`;
