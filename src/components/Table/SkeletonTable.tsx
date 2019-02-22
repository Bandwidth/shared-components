import React from 'react';
import styled from 'styled-components';
import Skeleton from 'skeletons/Skeleton';
import createArray from 'extensions/createArray';

const SkeletonTableContainer = styled.div<{ marginBetween: string }>`
  display: flex;
  flex-direction: column;
  & > * + * {
    margin-top: ${({ marginBetween }) => marginBetween};
  }
`;

// FIXME: Skeleton.Animated may not be defined
const SkeletonTableHeader = styled(Skeleton.Animated as any)`
  background: var(--skeleton-colors-dark);
  border-radius: 0.5em;
`;

const SkeletonTableRow = styled.div<{ marginBetween: string }>`
  display: flex;
  flex-direction: row;
  & > * + * {
    margin-left: ${({ marginBetween }) => marginBetween};
  }
  & > * {
    flex-grow: 1;
  }
`;

// FIXME: Skeleton.Animated may not be defined
const SkeletonTableCell = styled(Skeleton.Animated as any)`
  border-radius: 0.5em;
  animation-duration: var(--skeleton-pulse-fast);
`;

interface SkeletonTableProps {
  disableAnimation: boolean;
  rowHeight: string;
  columns: number;
  rows: number;
  marginBetween: string;
}

const SkeletonTable: React.SFC<SkeletonTableProps> & {
  Small: React.SFC<SkeletonTableProps>;
} = ({
  disableAnimation,
  rowHeight = '40px',
  columns = 3,
  rows = 4,
  marginBetween = '2px',
}) => (
  <SkeletonTableContainer marginBetween={marginBetween}>
    <SkeletonTableHeader
      disableAnimation={disableAnimation}
      height={rowHeight}
    />
    {createArray(rows).map(rowIdx => (
      <SkeletonTableRow marginBetween={marginBetween} key={rowIdx}>
        {createArray(columns).map(colIdx => (
          <SkeletonTableCell
            pctOffset={colIdx / columns}
            key={colIdx}
            disableAnimation={disableAnimation}
            height={rowHeight}
          />
        ))}
      </SkeletonTableRow>
    ))}
  </SkeletonTableContainer>
);

SkeletonTable.Small = props => <SkeletonTable rowHeight="23px" {...props} />;

export default SkeletonTable;
