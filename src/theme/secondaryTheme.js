import { defaultsDeep } from 'lodash';
import base from './baseTheme';

export default defaultsDeep(
  {
    name: 'secondary',

    colors: {
      ...base.colors,
      primary: base.colors.secondary,
      primaryLight: base.colors.secondaryFaded,
      primaryText: base.colors.secondaryText,
      secondary: base.colors.gutter,
      white: base.colors.black,
      black: base.colors.white,
    },
  },
  base,
);
