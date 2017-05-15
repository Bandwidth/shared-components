import color from 'color';

const colors = {
  black: '#666',
  white: '#fff',

  primary: '#00bcec',
  primaryText: '#008db1',
  primaryLight: '#d9f5fc',

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

  errorText: '#e8562e',
  errorBorder: '#f6bbab',
  errorBackground: '#b1351e',
  errorBackgroundLight: '#fceae6',
};

const fonts = {
  brand: '"Overpass", Raleway, "Open Sans", arial, sans-serif',
  default: '"Open Sans", arial, sans-serif',
  monospace: '"Source Code Pro", monospace',
};

const shadows = {
  default: `
    0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0 ,0, 0, 0.2)
    `,
  focusOutline: '0 0 0 5px #d9f5fc',
};

const padding = {
  extraSmall: '5px',
  small: '10px',
  medium: '15px',
  large: '30px',
  extraLarge: '60px',
}

export default {
  name: 'default',

  colors,
  fonts,
  shadows,
  padding,

  text: {
    fg: '#666',
    bg: 'transparent',
    fontSize: '14px',
    fontWeight: 'auto',
    fontFamily: fonts.default,
  },

  button: {
    fg: '#fff',
    bg: '#00bcec',
    activeFG: '#fff',
    activeBG: color('#00bcec').darken(0.2).string(),
    disabledBG: colors.disabled,
    disabledFG: colors.black,
    disabledBorder: `1px solid ${colors.disabled}`,
    border: `none`,
    fontSize: '0.8em',
    fontWeight: '700',
    fontFamily: fonts.default,
    textTransform: 'uppercase',
    padding: '13px 40px',
    margin: '0',
  },

  tab: {
    bg: 'transparent',
    fg: '#fff',
    accent: '#00bcec',
    activeFG: '#fff',
    fontSize: '1em',
    fontWeight: 'auto',
    padding: '2em 0',
    margin: '0 2em 0 0',
    // controls animations
    accentBarTop: 'auto',
    accentBarBottom: '0',
    marginBottom: 'auto',
  },

  input: {
    bg: '#fff',
    fg: '#666',
    accentValid: '#d9f5fc',
    disabledBG: '#e1e1e1',
    disabledFG: colors.black,
    disabledBorder: `1px solid ${colors.border}`,
    border: `1px solid ${colors.borderLight}`,
    focusedBorder: `1px solid ${colors.border}`,
    fontSize: '16px',
    fontFamily: fonts.brand,
    padding: '1em 1em',
    margin: 0,
    letterSpacing: '0.02em',
    lineHeight: '1.5',
    helpTextPadding: '0.4em 0 0 0',
  },

  helpText: {
    fg: '#7f8897',
    fontWeight: 300,
    fontFamily: fonts.brand,
  },

  radioButton: {
    bg: '#fff',
    fg: '#666',
    accent: '#00bcec',
    active: '#fff',
    border: `1px solid ${colors.borderLight}`,
    padding: '1em 1.4em',
  },

  topNav: {
    bg: '#1f2a44',
    fg: '#fff',
    padding: '0 2em',
    margin: '0',
  },

  sidebar: {
    bg: '#e1e1e1',
    fg: '#666',
    border: `1px solid ${colors.borderLight}`,
    margin: '0',
    padding: '0',
  },

  card: {
    bg: colors.white,
    fg: colors.black,
    fontSize: '1em',
    activeFG: '#00bcec',
    padding: '0.5em',
    margin: '0',
    border: `1px solid ${colors.borderLight}`,
    listPadding: '0 30px 30px 30px',
    helpFontFamily: fonts.brand,
    helpFontSize: '0.9em',
    helpFontWeight: 100,
  },

  form: {
    bg: colors.white,
    fg: '#666',
    border: `1px solid ${colors.borderLight}`,
    fontFamily: fonts.brand,
    // form intelligently applies spacing to its children
    // to acheive this spacing on elements
    // units are pixels
    elementHorizontalSpacing: 30,
    elementVerticalSpacing: 28,
  },

  formColumn: {
    border: `1px solid ${colors.borderLight}`,
  },

  shadow: {
    color: 'rgba(0, 0, 0, 0.14)',
  },

  label: {
    fg: '#666',
    bg: 'transparent',
    fontWeight: 600,
    fontSize: '1em',
    letterSpacing: '0.02em',
    fontFamily: fonts.brand,
    padding: '0 0 0.4em 0',
    requiredMarkFG: '#e8562e',
  },

  toggle: {
    bg: '#fff',
    fg: '#fff',
    activeBG: '#3a455c',
    activeFG: '#fff',
    border: '2px solid #3a455c',
    activeBorder: '2px solid #3a455c',
    disabledBG: '#666',
    disabledBorder: '2px solid #666',
    hoverBorder: '2px solid #008db1',
    hoverBG: '#008db1',
    focusShadow: '0 0 0 5px #d9f5fc',
    padding: '0.2em 0 0.2em 4.2em',
    height: '2em',
    width: '3.6em',
    fontFamily: fonts.brand,
    fontWeight: 600,
  },

  checkbox: {
    labelPadding: '0.2em 0 0.2em 2.1em',
    labelFontSize: '1.15em',
    fg: colors.black,
    checkFG: colors.white,
    emptyBG: colors.white,
    fullBG: colors.secondary,
    border: `2px solid ${colors.secondary}`,
    borderRadius: '0.2em',
    focusShadow: '0 0 0 5px #d9f5fc',
  },

  header: {
    fg: colors.primary,
    fontFamily: fonts.brand,
    fontWeight: 100,
    fontSize: '2.5em',
    lineHeight: '21px',
    margin: '0.83em 0 0 0',
  },

  subheader: {
    fontSize: '1.17em',
    fontFamily: fonts.brand,
    fontWeight: 800,
    fg: colors.black,
  },

  icon: {
    fontSize: '16px',
    fg: 'inherit',
  },

  code: {
    fontFamily: fonts.monospace,
    fontSize: '1em',
    bg: '#272b2d',
    fg: '#fff',
    padding: '2em',
  },

  inlineCode: {
    fontFamily: fonts.monospace,
    fg: '#666',
    bg: '#f1f1f1',
    border: '1px solid #e4e4e4',
    borderRadius: '3px',
    fontSize: '0.85em',
    borderRadius: '3px',
    padding: '0.3em',
  },

  // for request methods
  methodTag: {
    colors: {
      get: '#6cbf0d',
      post: '#00bcec',
      del: '#e8562e',
      delete: '#e8562e',
      put: '#a5639b',
    },
    padding: '0.5em 1em',
    borderRadius: '5px',
    fg: colors.white,
    fontSize: '1em',
    lineHeight: '1em',
  },

  selectItem: {
    fg: '#666',
    bg: '#fff',
    activeFG: '#008db1',
    padding: '0.5em',
    border: `1px solid ${colors.borderLight}`,
  },

  accordion: {
    labelFG: '#00bcec',
    labelFontSize: '1.5em',
    iconFontSize: '1em',
    labelFontFamily: fonts.brand,
    labelFontWeight: 400,
    border: `1px solid ${colors.borderLight}`,
    padding: '30px',
    textTransform: 'none',
  },

  listItem: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontFamily: fonts.brand,
    fg: 'rgb(39, 43, 45)',
    bg: 'transparent',
    selectedFG: colors.primary,
    selectedBG: colors.gutter,
    padding: '1.5em 2em',
    border: `1px solid ${colors.borderLight}`,
  },

  list: {
    border: `1px solid ${colors.borderLight}`,
  },

  table: {
    bg: colors.white,
    border: '1px solid rgba(0, 0, 0, 0.15)',
    borderRadius: '5px 5px 0 0',
    cellBG: 'transparent',
    cellBorder: '1px solid rgba(0, 0, 0, 0.15)',
    cellMargin: 0,
    cellPadding: '10px 15px',
    headerBG: colors.secondaryFaded,
    headerFG: colors.white,
    headerFontWeight: 300,
    headerFontFamily: fonts.brand,
    headerPadding: '10px 15px',
    rowOddBG: 'transparent',
    rowEvenBG: 'rgba(0, 0, 0, 0.15)',
    fontSize: '1em',
    sortArrowFG: 'rgba(255, 255, 255, 0.5)',
    sortArrowActiveFG: colors.white,
  },

  pane: {
    contentPadding: '20px 30px 30px 30px',
  },

  link: {
    fg: colors.primaryText,
    activeFG: colors.primary,
    bubbleBG: colors.primaryLight,
    bubbleBorderRadius: '2em',
    fontFamily: fonts.brand,
  },

  textarea: {
    bg: colors.white,
    fg: colors.black,
    border: `1px solid ${colors.borderLight}`,
    padding: '15px',
    fontWeight: 400,
    fontFamily: fonts.brand,
    lineHeight: '1.5em',
    fontSize: '14px',
  },

  modal: {
    blockerBG: 'rgba(0, 0, 0, 0.3)',
    bg: colors.white,
    shadow: shadows.default,
    borderRadius: '5px',
    minWidth: '20%',
    maxWidth: '70%',
    naturalWidth: 'auto',
    minHeight: 0,
    maxHeight: '70vh',
    naturalHeight: 'auto',
    titleBG: '#e1e1e1',
    titleFG: colors.black,
    titleFontFamily: fonts.brand,
    titleFontSize: '0.9em',
    titleFontWeight: 600,
    titleTextTransform: 'uppercase',
    titlePadding: '0.95em 1.5em 0.95em 1em',
  },

  callout: {
    maxWidth: '300px',
    bg: colors.white,
    fg: 'inherit',
    padding: '10px 15px',
    borderRadius: '3px',
    border: `1px solid ${colors.border}`,
    shadow: shadows.default,
  },
};
