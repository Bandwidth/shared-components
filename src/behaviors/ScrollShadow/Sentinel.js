import styled from 'styled-components';

export default styled.div`
  height: ${props => (props.debugShow ? '1px' : '0px')};
  width: ${props => (props.debugShow ? '100%' : 'auto')};
  background: ${props => (props.debugShow ? 'red' : 'transparent')};
  z-index: ${props => (props.debugShow ? '100000' : '0')};
  position: absolute;

  &.global.top {
    position: absolute;
    top: 0;
  }

  &.global.bottom {
    position: absolute;
    bottom: 0;
  }
`;
