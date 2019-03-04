import React from 'react';
import PulseGroup, { DefaultPulseProps } from './PulseGroup';
import createArray from 'extensions/createArray';

export interface SkeletonGroupProps extends DefaultPulseProps {
  /**
   * The number of items to include
   */
  count: number;
}

/**
 * `Skeleton.Group` defines a section that pulses together. Typically you can use it to
 * define a block of Skeletons that are grouped together in some way. It also allows
 * for easy repetition of Skeletons so that you don't have to manually create enough skeleton instances.
 * @visibleName Skeleton.Group
 */
const SkeletonGroup: React.FC<SkeletonGroupProps> = ({
  count = 1,
  children,
  ...rest
}) => (
  <React.Fragment>
    {createArray(count).map(rowIdx => (
      <PulseGroup {...rest} key={rowIdx}>
        {children}
      </PulseGroup>
    ))}
  </React.Fragment>
);

export default SkeletonGroup;
