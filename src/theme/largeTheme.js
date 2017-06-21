import { defaultsDeep } from 'lodash';
import base from './baseTheme';

export default defaultsDeep({
  name: 'large',

  text: {
    fontSize: '16px',
  },

  button: {
    fontSize: '0.9em',
    fontWeight: '700',
    fontFamily: base.fonts.default,
    padding: '15px 60px',
    margin: '1em 0.5em',
  },
}, base);
