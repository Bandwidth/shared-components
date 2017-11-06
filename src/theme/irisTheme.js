/*
  A theme that uses the new (circa 2017) 'amoeba' brand colors.
*/

import baseTheme from './catapultTheme';

const colors = {
  primary: {
    default: '#00bef0',
    dark: '#004658',
  },

  accents: [
    /* purple */
    {
      default: '#a95adf',
    },
    /* orange */
    {
      default: '#ff673c',
    },
  ]
};

export default baseTheme.extend({ colors });
