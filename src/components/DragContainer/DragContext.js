import React from 'react';
import { noop } from 'lodash';

export default React.createContext({
  isDragging: false,
  wrapDragHandle: noop,
});
