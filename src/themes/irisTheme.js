/*
  A theme that uses the new (circa 2017) 'amoeba' brand colors.
*/

export const colors = {
  primary: {
    default: '#00bef0',
    alternate: '#0099e5',
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
    medium: '#4d8d7c',
  },
  /* aka 'red' */
  negative: {
    default: '#ff391a',
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
    /* dark purple */
    {
      default: '#651f45'
    },
  ],
  gray: {
    /* aka medium */
    default: '#60545b',
    light: '#f3f4f6',
    border: '#bfc4cf',
    borderLight: '#dee0e6',
    disabled: '#dee0e6',
    dark: '#1c0a14',
    /* aka help-text */
    medium: '#8e858a',
    mediumLight: '#dee0e6',
  },
  shadow: {
    default: 'rgba(0, 0, 0, 0.3)',
    light: 'rgba(0, 0, 0, 0.12)',
    extraLight: 'rgba(0, 0, 0, 0.05)',
    white: 'rgba(255, 255, 255, 0.3)',
  },
  graphics: ['#4d8d7c', '#a95adf'],
  border: {
    medium: '#bfc4cf',
    dark: '#004658',
    light: '#dee0e6',
    disabled: '#ced2da',
  },
  background: {
    default: '#fff',
    inverted: '#1c0a14',
    disabled: '#ecedf1',
    disabledSelected: '#ced2da',
    dark: '#004658',
  },
  text: {
    default: '#60545b',
    inverted: '#fff',
    disabled: '#bfc4cf',
  },
};

export const fonts = {
  brand: '"Overpass", Raleway, "Open Sans", arial, sans-serif',
  default: '"Overpass", Raleway, "Open Sans", arial, sans-serif',
  monospace: '"Source Code Pro", monospace',
  icon: 'Bandwidth-v2',
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

export const skeleton = {
  colors: {
    default: 'var(--colors-gray-light)',
    dark: 'var(--colors-gray-medium-light)',
  },
  pulse: {
    opacity: '0.5',
    normal: '1.2s',
    fast: '0.6s',
  },
};

export const fontSizes = {
  default: '14px',
};

export default {
  name: 'iris',
  colors,
  fonts,
  shadows,
  spacing,
  thicknesses,
  skeleton,
  fontSizes,
};
