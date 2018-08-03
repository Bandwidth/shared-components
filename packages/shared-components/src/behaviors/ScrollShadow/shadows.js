// it would be difficult / impractical to control this via styled-components theme,
// so until we have full clearance to support CSS vars, we can just define the one
// value manually.
const SHADOW_COLOR = 'rgba(0, 0, 0, 0.12)';

const INNER_BOTTOM_SHADOW = `inset 0 -15px 10px -10px ${SHADOW_COLOR}, inset 0 15px 10px -10px transparent
`;
const INNER_TOP_SHADOW = `inset 0 -15px 10px -10px transparent, inset 0 15px 10px -10px ${SHADOW_COLOR}`;
const INNER_BOTH_SHADOW = `inset 0 -15px 10px -10px ${SHADOW_COLOR},
    inset 0 15px 10px -10px ${SHADOW_COLOR}
`;
const OUTER_BOTTOM_SHADOW = `0 -15px 10px -10px ${SHADOW_COLOR},
    0 15px 10px -10px transparent
`;
const OUTER_TOP_SHADOW = `0 -15px 10px -10px transparent,
    0 15px 10px -10px ${SHADOW_COLOR}
`;
const OUTER_BOTH_SHADOW = `0 -15px 10px -10px ${SHADOW_COLOR},
    0 15px 10px -10px ${SHADOW_COLOR}
`;

const SHADOW_STYLES = {
  inner: {
    top: INNER_TOP_SHADOW,
    bottom: INNER_BOTTOM_SHADOW,
    both: INNER_BOTH_SHADOW,
    none: 'none',
  },
  outer: {
    top: OUTER_TOP_SHADOW,
    bottom: OUTER_BOTTOM_SHADOW,
    both: OUTER_BOTH_SHADOW,
    none: 'none',
  },
};

export default (mode, outer) => {
  return SHADOW_STYLES[outer ? 'outer' : 'inner'][mode];
};
