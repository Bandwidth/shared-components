import React from 'react';
import omit from 'lodash.omit';

export default (props, extraProps) =>
  React.Children.map(props.children, child =>
    React.cloneElement(child, { ...omit(props, 'children'), ...extraProps }),
  );
