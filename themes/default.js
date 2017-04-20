import color from 'color';

const colors = {
  black: '#666',
  white: '#fff',
  primary: '#00bcec',
  secondary: '#1f2a44',
  secondaryText: '#3a455c',
  secondaryFaded: '#3a455c',
  grayLightText: '#c2c2c2',
  gutter: '#f7f7f7',
  border: '#e1e1e1',
  disabled: '#e1e1e1',
};

const fonts = {
  brand: '"Overpass", Raleway, "Open Sans", arial, sans-serif',
  default: '"Open Sans", arial, sans-serif',
};

export default {
  name: 'default',

  colors,
  fonts,

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
    border: `1px solid ${colors.primary}`,
    fontSize: '0.9em',
    fontWeight: '700',
    fontFamily: fonts.default,
    textTransform: 'uppercase',
    padding: '15px 50px',
    margin: '1em 0.5em',
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

  textInput: {
    bg: '#fff',
    fg: '#666',
    accentValid: '#d9f5fc',
    disabledBG: '#e1e1e1',
    disabledFG: colors.black,
    disabledBorder: '1px solid #c2c2c2',
    border: `1px solid ${colors.border}`,
    focusedBorder: '1px solid #c2c2c2',
    fontSize: '16px',
    padding: '1em 1em',
    margin: '0 1em 0 0',
    letterSpacing: '0.02em',
    lineHeight: '1.5',
  },

  radioButton: {
    bg: '#fff',
    fg: '#666',
    accent: '#00bcec',
    active: '#fff',
    border: `1px solid ${colors.border}`,
    padding: '1em 1.4em',
  },

  topNav: {
    bg: '#1f2a44',
    fg: '#fff',
    padding: '0 2em',
    margin: '0',
    minHeight: '80px',
  },

  sidebar: {
    bg: '#e1e1e1',
    fg: '#666',
    border: `1px solid ${colors.border}`,
    margin: '0',
    padding: '0',
  },

  card: {
    bg: colors.white,
    fg: colors.black,
    fontSize: '1em',
    activeFG: '#00bcec',
    padding: '0.5em',
    margin: '0.25em 1em',
    border: `1px solid ${colors.border}`,
    listPadding: '0 30px 30px 30px',
    helpFontFamily: fonts.brand,
    helpFontSize: '0.9em',
    helpFontWeight: 100,
  },

  form: {
    bg: 'transparent',
    fg: '#666',
    padding: '1em',
    margin: 'auto',
    border: 'none',
  },

  shadow: {
    color: 'rgba(0, 0, 0, 0.14)',
  },

  header: {
    fontSize: '22px',
    fontWeight: '100',
    fontFamily: fonts.brand,
  },

  label: {
    fg: '#666',
    bg: 'transparent',
    fontWeight: 600,
    fontSize: '1em',
    letterSpacing: '0.02em',
    fontFamily: fonts.brand,
    margin: '1em 0 0 0',
    padding: '0 0 0.4em 0',
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
    margin: '0.2em',
    height: '2em',
    width: '3.6em',
    fontFamily: fonts.brand,
    fontWeight: 600,
  },

  hook: {
    fg: '#3a455c',
    fontSize: '2em',
    fontFamily: fonts.brand,
    fontWeight: 300,
  },

  subheader: {
    fontSize: '1.5em',
    fontFamily: fonts.brand,
    fontWeight: 300,
    fg: '#3a455c',
  },

  icon: {
    fontSize: '16px',
    fg: 'inherit',
  },

  code: {
    fontFamily: '"Source Code Pro", monospace',
    inlineFG: '#666',
    inlineBG: '#f1f1f1',
    inlineBorder: '1px solid #e4e4e4',
    borderRadius: '3px',
    fontSize: '0.85em',
    padding: '0.3em',
  },

  selectItem: {
    fg: '#666',
    bg: '#fff',
    activeFG: '#008db1',
    padding: '0.5em',
    border: `1px solid ${colors.border}`,
  },

  accordion: {
    labelFG: '#00bcec',
    labelFontSize: '1.5em',
    labelFontFamily: fonts.brand,
    border: `1px solid ${colors.border}`,
    padding: '30px',
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
    border: `1px solid ${colors.border}`,
  },

  list: {
    border: `1px solid ${colors.border}`,
  },

  metric: {
    border: `1px solid ${colors.border}`,
    bg: colors.white,
    fg: colors.black,
    accent: colors.primary,
    figureFontSize: '4em',
    figureFontWeight: 200,
    figureFontFamily: fonts.brand,
    detailsFontSize: '1em',
    detailsFontFamily: fonts.default,
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
    titleMargin: '30px 30px 30px 30px',
    titleFG: colors.primary,
    titleFontFamily: fonts.brand,
    titleFontWeight: 100,
    titleFontSize: '2.5em',
    titleLineHeight: '21px',
    border: `1px solid ${colors.border}`,
  },
};
