import { defaultsDeep } from 'lodash';
import color from 'color';
import base from './default';

export default defaultsDeep({
  name: 'large',

  text: {
    fontSize: '16px',
  },

  button: {
    fg: '#fff',
    bg: '#00bcec',
    activeFG: '#fff',
    activeBG: color('#00bcec').darken(0.2).string(),
    disabledBG: base.colors.disabled,
    disabledFG: base.colors.black,
    disabledBorder: `1px solid ${base.colors.disabled}`,
    border: `none`,
    fontSize: '0.9em',
    fontWeight: '700',
    fontFamily: base.fonts.default,
    textTransform: 'uppercase',
    padding: '15px 60px',
    margin: '1em 0.5em',
  },
}, base);
