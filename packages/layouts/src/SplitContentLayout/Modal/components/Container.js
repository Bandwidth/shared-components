import styled, { keyframes } from 'styled-components';
import themeGet from '@bandwidth/shared-components/dist/extensions/themeGet';

const show = keyframes`
from {
  top: 100%;
}

to {
  top: 0;
}
`;

export default styled.div`
  position: absolute;
  left: 0;
  right: 0;
  transition: 0.2s ease all;
  z-index: 0;
  top: ${props => (props.expanded ? '-1px' : '100%')};
  height: 100%;
  background: ${themeGet('colors.background.default')};
  border: 1px solid ${themeGet('colors.border.medium')};
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  overflow-y: auto;
  overflow-y: overlay;
  animation: ${show} 0.2s;
  padding: ${themeGet('spacing.large')};
  box-shadow: 0 0 1000px 0 #00000040;
`;
