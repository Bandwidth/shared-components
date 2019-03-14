import styled from 'styled-components';
import { themeGet } from 'extensions';

export default styled.div`
  background-color: ${themeGet('colors.background.default')};
  border: ${themeGet('thicknesses.wide')} solid
    ${themeGet('colors.border.medium')};
  box-shadow: ${themeGet('shadows.short')};
  box-sizing: border-box;
  max-height: 200px;
  z-index: 1000001;
  -webkit-overflow-scrolling: touch;
  overflow-y: auto;
  overflow-x: hidden;
  will-change: transform;
`;
