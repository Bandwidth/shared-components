import isString from 'lodash.isstring';
import isFunction from 'lodash.isfunction';

export default item => {
  if (isString(item)) {
    return item;
  }
  if (isFunction(item.get)) {
    return item.get('id');
  }
  return item.id || JSON.stringify(item);
};
