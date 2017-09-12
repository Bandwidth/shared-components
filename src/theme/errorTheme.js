import { defaultsDeep } from 'lodash';
import base from './baseTheme';

export default defaultsDeep({
  name: 'error',

  colors: {
    ...base.colors,

    primary: base.colors.error,
    primaryText: base.colors.errorText,
    primaryLight: base.colors.errorBackgroundLight,
  },

  button: {
    activeBG: '#c83c16',
  },

  link: {
    fg: base.colors.errorText,
    activeFG: '#c83c16',
  },
}, base);
