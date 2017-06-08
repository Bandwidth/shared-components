import color from 'color';
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
    activeBG: color(base.colors.error).darken(0.2).string(),
  },

  link: {
    fg: base.colors.errorText,
    activeFG: color(base.colors.errorText).darken(0.2).string(),
  },
}, base);
