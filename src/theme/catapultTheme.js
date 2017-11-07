import baseTheme from './irisTheme';

export const colors = {
  primary: {
    default: '#00bcec',
    dark: '#3a455c',
  },
  accents: [
    /* purple */
    {
      default: '#a5639b',
    },
    /* orange */
    {
      default: '#e9572f',
    },
  ],
};

export default baseTheme.extend({
  colors,
});
