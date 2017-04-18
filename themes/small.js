import { defaultsDeep } from 'lodash';
import base from './default';

export default defaultsDeep({
  name: 'small',

  text: {
    fontSize: '11px',
  },

  header: {
    fontSize: '16px',
  },

  tab: {
    fontSize: '0.8em',
    padding: '2em 0 0.2em 0',
    accentBarTop: '100%',
    accentBarBottom: 'auto',
    marginBottom: '5px',
  },

  topNav: {
    minHeight: '32px',
  },

  accordion: {
    labelFG: base.colors.black,
    padding: '20px',
    labelFontSize: '1.2em',
  },

  table: {
    fontSize: '0.9em',
  },

  card: {
    fontSize: '0.75em',
    padding: '0.5em',
    margin: '0.25em 1em',
  },
}, base);
