import flatten from 'flat';

// Convert a JSON key that has been flattened (colors.primary.default)
// into a css var key (--colors-primary-default).
export const cssvarKey = (k: string): string =>
  `--${k.replace(/\./g, '-').replace(/[A-Z]/g, g => `-${g[0].toLowerCase()}`)}`;

/**
Converts nested dictionary of keys with css values into a flat dictionary
of cssvars to those same values. For example:

{
  colors: {
    black: "#000"
  }
}

becomes

{
  "--colors-black": "#000"
}
*/
export default (obj: object): object => {
  if (!obj) {
    return {};
  }
  const flatObj = flatten(obj);
  return Object.keys(flatObj).map(k => {
    return `${cssvarKey(k)}: ${flatObj[k]};`;
  });
};
