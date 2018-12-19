import React from 'react';
import PulseGroup from 'skeletons/PulseGroup';
import createArray from 'extensions/createArray';

const SkeletonGroup = ({ count = 1, children, ...rest }) => (
  <React.Fragment>
    {createArray(count).map(rowIdx => (
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
