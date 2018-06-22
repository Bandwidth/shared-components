import flatten from 'flat';

export default obj => {
  if (!obj) {
    return '';
  }
  const flatObj = flatten(obj);
  return Object.keys(flatObj).map(k => {
    const newKey = `--${k
      .replace(/\./g, '-')
      .replace(/[A-Z]/g, g => `-${g[0].toLowerCase()}`)}`;
    return `${newKey}: ${flatObj[k]};`;
  });
};
