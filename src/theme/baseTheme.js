const colors = {
  black: '#666',
  white: '#fff',

  primary: '#00bcec',
  primaryText: '#008db1',
  primaryLight: '#d9f5fc',
  primaryDark: '#008db1',

  secondary: '#1f2a44',
  secondaryText: '#3a455c',
  secondaryFaded: '#3a455c',

  grayLightText: '#7f8897',
  greyLightText: '#7f8897',
  grayLight: '#f3f3f3',
  greyLight: '#f3f3f3',
  grayMed: '#666',
  greyMed: '#666',
  grayDark: '#272b2d',
  greyDark: '#272b2d',

  gutter: '#f7f7f7',
  border: '#c2c2c2',
  borderLight: '#e1e1e1',
  disabled: '#e1e1e1',

  successText: '#6cbf0d',
  successBorder: '#b5df86',
  successBackground: '#5a9f0b',
  successBackgroundLight: '#e9f5db',

  infoText: '#3a455c',
  infoBorder: '#33c9f0',
  infoBackground: '#00bcec',
  infoBackgroundLight: '#d9f5fc',

  error: '#e8562e',
  errorText: '#e8562e',
  errorBorder: '#f6bbab',
  errorBackground: '#b1351e',
  errorBackgroundLight: '#fceae6',

  positiveText: '#6cbf0d',
  negativeText: '#e8562e',
};

const fonts = {
  brand: '"Overpass", Raleway, "Open Sans", arial, sans-serif',
  default: '"Overpass", Raleway, "Open Sans", arial, sans-serif',
  monospace: '"Source Code Pro", monospace',
};

const shadows = {
  default: `
    0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0 ,0, 0, 0.2)
    `,
  focusOutline: '0 0 0 5px #d9f5fc',
  insetValid: `inset 0 -5px 0 ${colors.primaryLight}`,
  insetInvalid: `inset 0 -5px 0 ${colors.errorBackgroundLight}`,
};

const padding = {
  extraSmall: '5px',
  small: '10px',
  medium: '15px',
  large: '30px',
  extraLarge: '60px',
};

export default {
  name: 'default',

  colors,
  fonts,
  shadows,
  padding,
  spacing: padding,
};
