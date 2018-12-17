import styled from 'styled-components';
import themeGet from 'extensions/themeGet';

const ShadowOverlay = styled.div`
  transition: 0.05s ease box-shadow;
  position: ${props => (props.entireViewport ? 'fixed' : 'absolute')};
  z-index: ${props => (props.entireViewport ? 'auto' : '5')};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;

  &.outer.top {
    box-shadow: 0 -15px 10px -10px transparent,
      0 15px 10px -10px ${themeGet('colors.shadow.light')};
  }
  &.outer.bottom {
    box-shadow: 0 -15px 10px -10px ${themeGet('colors.shadow.light')},
      0 15px 10px -10px transparent;
  }
  &.outer.topBottom {
    box-shadow: 0 -15px 10px -10px ${themeGet('colors.shadow.light')},
      0 15px 10px -10px ${themeGet('colors.shadow.light')};
  }

  &.inner.top {
    box-shadow: inset 0 -15px 10px -10px transparent,
      inset 0 15px 10px -10px ${themeGet('colors.shadow.light')};
  }
  &.inner.bottom {
    box-shadow: inset 0 -15px 10px -10px ${themeGet('colors.shadow.light')},
      inset 0 15px 10px -10px transparent;
  }
  &.inner.topBottom {
    box-shadow: inset 0 -15px 10px -10px ${themeGet('colors.shadow.light')},
      inset 0 15px 10px -10px ${themeGet('colors.shadow.light')};
  }

  &.inner.left {
    box-shadow: inset -15px 0 10px -10px transparent,
      inset 15px 0 10px -10px ${themeGet('colors.shadow.light')};
  }
  &.inner.right {
    box-shadow: inset -15px 0 10px -10px ${themeGet('colors.shadow.light')},
      inset 15px 0 10px -10px transparent;
  }
  &.inner.leftRight {
    box-shadow: inset -15px 0 10px -10px ${themeGet('colors.shadow.light')},
      inset 15px 0 10px -10px ${themeGet('colors.shadow.light')};
  }
`;

export default ShadowOverlay;
