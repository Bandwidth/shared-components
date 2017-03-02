import { defaultsDeep } from 'lodash';
import base from './default';

export default defaultsDeep({
  name: 'secondary',

  button: {
    fg: '#1f2a44',
    bg: 'transparent',
    border: '1px solid #1f2a44',
    activeBG: '#1f2a44',
  },

  tab: {
    bg: '#f7f7f7',
    fg: '#666',
    accent: '#1f2a44',
    activeFG: '#00bcec',
  },

  topNav: {
    bg: '#f7f7f7',
    fg: '#666',
  },
}, base);
