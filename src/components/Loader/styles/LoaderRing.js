import styled, { keyframes } from 'styled-components';
import get from 'extensions/themeGet';

const grow = keyframes`
  0% {
    transform: scale(0);
  }

  50% {
    opacity: 1;
    transform: scale(1);
  }

  100% {
    opacity: 0;
  }
`;

const LoaderRing = styled.div.withConfig({ displayName: 'LoaderRing' })`
  height: ${({ size }) => size};
  width: ${({ size }) => size};

  border-width: 2px;
  border-style: solid;
  border-color: ${get('colors.primary.default')};
  border-radius: 50%;
  margin: 0 5px;
  transform: scale(0);
  animation: ${grow} 1000ms ease infinite 0ms;

  &:nth-child(2) {
    animation-delay: 300ms;
  }
  &:nth-child(3) {
    animation-delay: 600ms;
  }

  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`;

LoaderRing.defaultProps = {
  size: '20px',
  color: null,
};




export default LoaderRing;
