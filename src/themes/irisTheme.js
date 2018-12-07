/*
  A theme that uses the new (circa 2017) 'amoeba' brand colors.
*/

export const colors = {
  primary: {
    default: '#00bef0',
    alternate: '#008db1',
    light: '#e0f7fd',
    border: '#00bef0',
    dark: '#004658',
  },
  /* aka 'green' */
  positive: {
    default: '#00aa6c',
    light: '#e0fff7',
    border: '#00fbb9',
    dark: '#005c44',
    medium: '#00aa6c',
  },
  /* aka 'red' */
  negative: {
    default: '#e9562e',
    light: '#ffede8',
    border: '#ffb39e',
    dark: '#a53f0c',
    medium: '#ff391a',
  },
  accents: [
    /* purple */
    {
      default: '#a95adf',
    },
    /* orange */
    {
      default: '#ff673c',
    },
  ],
  gray: {
    /* aka medium */
    default: '#666',
    light: '#f7f7f7',
    border: '#c2c2c2',
    borderLight: '#e1e1e1',
    disabled: '#e1e1e1',
    dark: '#272b2d',
    /* aka help-text */
    medium: '#7f8897',
    mediumLight: '#dedede',
  },
  shadow: {
    default: 'rgba(0, 0, 0, 0.3)',
    light: 'rgba(0, 0, 0, 0.12)',
    extraLight: 'rgba(0, 0, 0, 0.05)',
    white: 'rgba(255, 255, 255, 0.3)',
  },
  graphics: ['#41d3bd', '#a95adf'],
  border: {
    medium: '#c2c2c2',
    dark: '#004658',
    light: '#e1e1e1',
    disabled: '#d2d2d2',
  },
  background: {
    default: '#fff',
    inverted: '#272b2d',
    disabled: '#ececec',
    disabledSelected: '#d2d2d2',
    dark: '#004658',
  },
  text: {
    default: '#666',
    inverted: '#fff',
    disabled: '#c2c2c2',
  },
};

export const fonts = {
  brand: '"Overpass", Raleway, "Open Sans", arial, sans-serif',
  default: '"Overpass", Raleway, "Open Sans", arial, sans-serif',
  monospace: '"Source Code Pro", monospace',
  icon: 'Bandwidth',
};

/**
 * Font metrics; detail the characteristics of the font as measured using font-measure library.
 * https://github.com/dy/font-measure#readme
 */
export const fm = {
  brand: {
    alphabetic: 0.7291666666666666,
    ascent: 0,
    baseline: 0.7291666666666666,
    bottom: 1,
    capHeight: 0.7083333333333334,
    descent: 0.9375,
    hanging: -0.0625,
    ideographic: 1.0208333333333333,
    lineHeight: 1,
    lower: 0.20833333333333334,
    median: 0.4791666666666667,
    middle: 0.4791666666666667,
    overshoot: 0.020833333333333332,
    tittle: 0.020833333333333332,
    top: 0,
    upper: 0.020833333333333332,
    xHeight: 0.5208333333333334,
  },
};

export const shadows = {
  short: '0 2px 4px rgba(0, 0, 0, 0.14)',
  long: `
    0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0 ,0, 0, 0.2)
    `,
  focusOutline: '0 0 0 5px #e0f7fd',
};

export const spacing = {
  extraSmall: '5px',
  small: '10px',
  medium: '15px',
  large: '30px',
  extraLarge: '60px',
};

export const thicknesses = {
  normal: '1px',
  default: '1px',
  wide: '2px',
  thick: '2px',
  large: '2px',
  extraWide: '3px',
  extraLarge: '3px',
};

export const fontSizes = {
  default: '14px',
};

export default {
  name: 'iris',
  colors,
  fm,
  fonts,
  shadows,
  spacing,
  thicknesses,
  fontSizes,
};
