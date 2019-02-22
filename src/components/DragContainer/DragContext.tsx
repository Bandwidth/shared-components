import React from 'react';
import noop from 'lodash.noop';

export default React.createContext<{
  isDragging: boolean;
  wrapDragHandle: (dragHandleNode: any) => void;
}>({
  isDragging: false,
  wrapDragHandle: noop,
});
