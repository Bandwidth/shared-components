import themeGet from 'extensions/themeGet';
import styled, { css } from 'styled-components';

const INNER_BOTTOM_SHADOW = props => `inset 0 -15px 10px -10px ${themeGet(
  'colors.shadow.light',
)(props)}, inset 0 15px 10px -10px transparent
`;
const INNER_TOP_SHADOW = props =>
  `inset 0 -15px 10px -10px transparent, inset 0 15px 10px -10px ${themeGet(
    'colors.shadow.light',
  )(props)}`;
const INNER_BOTH_SHADOW = props => `inset 0 -15px 10px -10px ${themeGet(
  'colors.shadow.light',
)(props)},
    inset 0 15px 10px -10px ${themeGet('colors.shadow.light')(props)};
`;
const OUTER_BOTTOM_SHADOW = props => `0 -15px 10px -10px ${themeGet(
  'colors.shadow.light',
)(props)},
    0 15px 10px -10px transparent;
`;
const OUTER_TOP_SHADOW = props => `0 -15px 10px -10px transparent,
    0 15px 10px -10px ${themeGet('colors.shadow.light')(props)};
`;
const OUTER_BOTH_SHADOW = props => `0 -15px 10px -10px ${themeGet(
  'colors.shadow.light',
)(props)},
    0 15px 10px -10px ${themeGet('colors.shadow.light')(props)};
`;

const SHADOW_STYLES = {
  inner: {
    top: INNER_TOP_SHADOW,
    bottom: INNER_BOTTOM_SHADOW,
    both: INNER_BOTH_SHADOW,
    none: () => 'none',
  },
  outer: {
    top: OUTER_TOP_SHADOW,
    bottom: OUTER_BOTTOM_SHADOW,
    both: OUTER_BOTH_SHADOW,
    none: () => 'none',
  },
};

const ShadowOverlay = styled.div`
  transition: 0.05s ease box-shadow;
  position: ${props => (props.entireViewport ? 'fixed' : 'absolute')};
  z-index: ${props => (props.global ? 'auto' : '5')};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;

  box-shadow: ${props => SHADOW_STYLES[props.placement][props.mode](props)};
`;

export default ShadowOverlay;
