import { defaultsDeep } from 'lodash';
import base from './default';

export default defaultsDeep({
  name: 'small',

  text: {
    fontSize: '16px',
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
    fontSize: '0.9em',
    fontWeight: '700',
    fontFamily: fonts.default,
    textTransform: 'uppercase',
    padding: '15px 60px',
    margin: '1em 0.5em',
  },
}, base);
