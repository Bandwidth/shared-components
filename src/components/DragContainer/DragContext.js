import React from 'react';
import noop from 'lodash.noop';

export default React.createContext({
  isDragging: false,
  wrapDragHandle: noop,
});
