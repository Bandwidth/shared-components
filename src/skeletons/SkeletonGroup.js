import React from 'react';
import PulseGroup from 'skeletons/PulseGroup';

const SkeletonGroup = ({ count = 1, children, ...rest }) => (
  <React.Fragment>
    {Array.from(Array(count).keys()).map(rowIdx => (
      <PulseGroup {...rest} key={rowIdx}>
        {children}
      </PulseGroup>
    ))}
  </React.Fragment>
);

/**
 * @component
 */
export default SkeletonGroup;
