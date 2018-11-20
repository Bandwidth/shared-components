import styled, { keyframes } from 'styled-components';
import OptionsList from './OptionsList';

const expandDown = keyframes`
  from {
    transform: scaleY(0);
    opacity: 0;
  }
  to {
    transform: scaleY(1);
    opacity: 1;
  }
`;

const expandUp = keyframes`
  from {
    transform: scaleY(0);
    opacity: 0;
  }
  to {
    transform: scaleY(1);
    opacity: 1;
  }
`;

export default styled.div`
  &[data-placement='bottom'] > * {
    border-top-width: 0;
    transform-origin: 50% 0%;
    animation: ${expandDown} 200ms;
  }
  &[data-placement='top'] > * {
    border-bottom-width: 0;
    transform-origin: 50% 100%;
    animation: ${expandUp} 200ms;
  }
`;
