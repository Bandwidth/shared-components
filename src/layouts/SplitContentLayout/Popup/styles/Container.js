import styled, { keyframes } from 'styled-components';
import { themeGet } from 'extensions';
import { TRANSITION_MS } from '../constants';

const show = keyframes`
from {
  top: 100%;
  box-shadow: 0 0 0 5000px transparent;
}

to {
  top: 0;
  box-shadow: 0 0 0 5000px ${themeGet('colors.shadow.default')};
}
`;

export default styled.div`
  position: absolute;
  left: 0;
  right: 0;
  transition: ${TRANSITION_MS / 1000}s ease all;
  top: ${props => (props.expanded ? '5%' : '100%')};
  height: 100%;
  background: ${themeGet('colors.background.default')};
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  box-shadow: 0 0 0 5000px
    ${props =>
      props.expanded
        ? themeGet('colors.shadow.default')(props)
        : 'transparent'};
  z-index: 30;
  display: flex;
  flex-direction: column;
  padding: ${themeGet('spacing.large')} 0;
`;
