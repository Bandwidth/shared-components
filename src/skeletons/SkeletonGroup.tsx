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
 * @visibleName Skeleton.Group
 */
const SkeletonGroup: React.SFC<SkeletonGroupProps> = ({
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
