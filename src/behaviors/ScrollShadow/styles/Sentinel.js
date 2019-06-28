import styled from 'styled-components';

export default styled.div`
  background: ${props => (props.debugShow ? 'red' : 'transparent')};
  z-index: ${props => (props.debugShow ? '100000' : '0')};

  &.global {
    position: absolute;
  }

  &.global.top {
    top: 0;
  }

  &.global.bottom {
    bottom: 0;
  }

  &.top,
  &.bottom {
    height: ${props => (props.debugShow ? '1px' : '0px')};
    width: ${props => (props.debugShow ? '100%' : 'auto')};
  }

  &.global.left {
    left: 0;
  }

  &.global.right {
    right: 0;
  }

  &.right {
    width: 0;
  }

  &.left {
    width: ${props => (props.debugShow ? '1px' : '0px')};
  }

  &.left,
  &.right {
    height: ${props => (props.debugShow ? '100%' : 'auto')};
  }
`;
