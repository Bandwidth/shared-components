import { defaultsDeep } from 'lodash';
import base from './default';

export default defaultsDeep({
  name: 'secondary',

  button: {
    fg: '#1f2a44',
    bg: 'transparent',
    border: '1px solid #1f2a44',
    disabledBG: 'transparent',
    disabledBorder: `1px solid ${base.colors.disabled}`,
    activeBG: '#1f2a44',
  },

  tab: {
    bg: base.colors.gutter,
    fg: base.colors.black,
    accent: '#1f2a44',
    activeFG: '#00bcec',
  },

  topNav: {
    bg: base.colors.gutter,
    fg: base.colors.black,
    minHeight: '60px',
  },
}, base);
