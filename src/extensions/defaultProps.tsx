import React from 'react';

const wrap = defaults => <P extends object>(
  WrappedComponent: React.ComponentType<P> | React.SFC<P>,
): React.SFC<P> => props => <WrappedComponent {...defaults} {...props} />;

export default wrap;
