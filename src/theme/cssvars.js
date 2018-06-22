import flatten from 'flat';

export const cssvarKey = k =>
  `--${k.replace(/\./g, '-').replace(/[A-Z]/g, g => `-${g[0].toLowerCase()}`)}`;

export default obj => {
  if (!obj) {
    return '';
  }
  const flatObj = flatten(obj);
  return Object.keys(flatObj).map(k => {
    return `${cssvarKey(k)}: ${flatObj[k]};`;
  });
};
