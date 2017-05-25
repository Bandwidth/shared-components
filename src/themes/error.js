import color from 'color';
import { defaultsDeep } from 'lodash';
import base from './default';

export default defaultsDeep({
  name: 'error',

  button: {
    fg: '#fff',
    bg: '#e8562e',
    activeBG: color('#e9562e').darken(0.2).string(),
    border: '1px solid #e8562e',
  },

  link: {
    fg: base.colors.errorText,
  },
}, base);
