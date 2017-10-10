/*
  A theme that uses the new (circa 2017) 'amoeba' brand colors.
*/

import baseTheme from './baseTheme';

const palette = {
  blue: {
    faded: '#e1faf9',
    lightest: '#b3ecfb',
    lighter: '#fdd2f5',
    main: '#00bef0',
    darker: '#00afec',
    darkest: '#0099e5',
  },
  green: {
    faded: '#b9fdeb',
    lightest: '#b3feea',
    lighter: '#4dfcce',
    main: '#00fbb9',
    darker: '#00faaa',
    darkest: '#00f893',
  },
  purple: {
    faded: '#e3e3e6',
    lightest: '#e5c3f5',
    lighter: '#c39ce9',
    main: '#a95adf',
    darker: '#9848d7',
    darkest: '#7e2eca',
  },
  maroon: {
    faded: '#e3e3e6',
    lightest: '#d1bcc7',
    lighter: '#93627d',
    main: '#651f45',
    darker: '#531736',
    darkest: '#370a1f',
  },
  orange: {
    faded: '#ffe3db',
    lightest: '#ffd1c5',
    lighter: '#ff9577',
    main: '#ff673c',
    darker: '#ff542e',
    darkest: '#ff391a',
  },
  deepBlue: {
    lightest: '#b3c8cd',
    lighter: '#4d7e8a',
    main: '#004658',
    darker: '#003747',
    darkest: '#00202d',
  },
  darkGreen: {
    main: '#005c44',
  },
  darkPurple: {
    main: '#4d2966',
  },
  darkOrange: {
    main: '#a53f0c',
  },
  black: {
    lightest: '#bbb6b9',
    lighter: '#60545b',
    main: '#1c0a14',
    darker: '#14070e',
    darkest: '#090306',
  },
  gray: {
    lightest: '#f3f4f6',
    lighter: '#e4e6eb',
    main: '#d8dbe2',
    darker: '#ced2da',
    darkest: '#bfc4cf',
  },
  lightPurple: {
    main: '#c3c3e6',
  },
  white: {
    main: '#fffff2',
  },
};

const colors = {
  black: palette.black.main,
  white: palette.white.main,

  primary: palette.blue.main,
  primaryLight: palette.blue.faded,
  primaryDark: '#008db1',

  secondary: palette.deepBlue.main,
  secondaryDark: palette.deepBlue.darker,

  grayLightText: '#7f8897',
  greyLightText: '#7f8897',
  grayLight: palette.gray.lightest,
  greyLight: palette.gray.lightest,
  grayMedium: palette.gray.main,
  greyMedium: palette.gray.main,
  grayDark: palette.black.main,
  greyDark: palette.black.main,

  border: palette.gray.darkest,
  borderLight: palette.gray.darker,

  disabled: palette.gray.lighter,

  successText: palette.darkGreen.main,
  successBorder: palette.darkGreen.main,
  successBackground: palette.green.darkest,
  successBackgroundLight: palette.green.faded,

  infoText: palette.blue.darkest,
  infoBorder: palette.deepBlue.main,
  infoBackground: palette.blue.main,
  infoBackgroundLight: palette.blue.faded,

  error: palette.orange.main,
  errorText: palette.orange.darker,
  errorBorder: palette.darkOrange.main,
  errorBackground: palette.orange.darker,
  errorBackgroundLight: palette.orange.faded,

  positiveText: palette.green.darkest,
  negativeText: palette.orange.darker,

  accents: [
    palette.green.main,
    palette.purple.main,
    palette.orange.main,
  ],

  graphics: [
    palette.green.main,
    palette.purple.main,
  ],
};

export default baseTheme.extend({ colors });
