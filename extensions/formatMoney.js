export default (money) => {
  if (typeof money === 'string') {
    const [dollars, cents] = money.split('.');
    return `${dollars}.${(`${cents}00`).substr(0, 2)}`;
  } else if (typeof money === 'number') {
    return parseFloat(money).toFixed(2);
  }
  // we don't recognize this money type...
  return money;
};
