import { defaultsDeep } from 'lodash';
import base from './baseTheme';

export default defaultsDeep(
  {
    name: 'small',

    text: {
      fontSize: '11px',
    },

    header: {
      margin: '12px 12px',
      fontSize: '22px',
      lineHeight: '22px',
    },

    tab: {
      fontSize: '0.8em',
      padding: '30px 0 0 0',
      margin: '0 30px 0 0',
      accentBarTop: 'calc(100% + 10px)',
      accentBarBottom: 'auto',
      marginBottom: '15px',
    },

    topNav: {
      minHeight: '32px',
    },

    accordion: {
      labelFG: base.colors.black,
      padding: '20px',
      labelFontSize: '14px',
      iconFontSize: '14px',
      textTransform: 'uppercase',
      labelFontWeight: 700,
    },

    table: {
      fontSize: '0.9em',
    },

    card: {
      fontSize: '0.75em',
      padding: '0.5em',
      margin: '0.25em 1em',
      helpFontSize: '1em',
    },

    methodTag: {
      padding: '0.05em 0.6em',
      fontSize: '14px',
      lineHeight: '1.2em',
    },

    button: {
      padding: '11px 30px',
      fontSize: '11px',
    },
  },
  base,
);
