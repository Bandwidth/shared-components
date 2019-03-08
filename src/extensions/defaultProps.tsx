import React from 'react';

const wrap = <P extends object>(
  WrappedComponent: React.ComponentType<P> | React.FC<P>,
  defaults: Partial<P>,
): React.FC<P> => props => <WrappedComponent {...defaults} {...props} />;

export default wrap;
