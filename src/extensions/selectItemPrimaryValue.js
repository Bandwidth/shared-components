export default item => {
  if (_.isString(item)) {
    return item;
  }
  if (_.isFunction(item.get)) {
    return item.get('id');
  }
  return item.id || JSON.stringify(item);
};
