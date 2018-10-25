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
    /*
     * this is just a browser quirk we haven't figured out yet...
     * a 0-width element doesn't get rendered within the scrollable area.
     */
    width: 1px;
  }

  &.left {
    width: ${props => (props.debugShow ? '1px' : '0px')};
  }

  &.left,
  &.right {
    height: ${props => (props.debugShow ? '100%' : 'auto')};
  }
`;
