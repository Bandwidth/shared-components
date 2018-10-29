import isString from 'lodash.isstring';
import isFunction from 'lodash.isfunction';

export default item => {
  if (!item) {
    return item;
  }

  if (isString(item)) {
    return item;
  }
  if (item.get && isFunction(item.get)) {
    return item.get('id');
  }
  return item.id || JSON.stringify(item);
};
