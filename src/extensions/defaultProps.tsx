import React from 'react';

const wrap = defaults => <P extends object>(
  WrappedComponent: React.ComponentType<P> | React.FC<P>,
): React.FC<P> => props => <WrappedComponent {...defaults} {...props} />;

export default wrap;
