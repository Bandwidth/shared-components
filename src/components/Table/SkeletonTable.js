import React from 'react';
import styled from 'styled-components';
import Skeleton from 'skeletons/Skeleton';

const SkeletonTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  & > * + * {
    margin-top: ${({ marginBetween }) => marginBetween};
  }
`;

const SkeletonTableHeader = styled(Skeleton.Animated)`
  background: var(--skeleton-colors-dark);
  border-radius: 0.5em;
`;

const SkeletonTableRow = styled.div`
  display: flex;
  flex-direction: row;
  & > * + * {
    margin-left: ${({ marginBetween }) => marginBetween};
  }
  & > * {
    flex-grow: 1;
  }
`;

const SkeletonTableCell = styled(Skeleton.Animated)`
  border-radius: 0.5em;
  animation-duration: var(--skeleton-pulse-fast);
`;

const SkeletonTable = ({
  disableAnimation,
  width,
  rowHeight = '40px',
  columns = 3,
  rows = 4,
  marginBetween = '2px',
}) => (
  <SkeletonTableContainer
    disableAnimation={disableAnimation}
    width={width}
    marginBetween={marginBetween}
  >
    <SkeletonTableHeader
      disableAnimation={disableAnimation}
      height={rowHeight}
    />
    {Array.from(Array(rows).keys()).map(rowIdx => (
      <SkeletonTableRow marginBetween={marginBetween} key={rowIdx}>
        {Array.from(Array(columns).keys()).map(colIdx => (
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

/**
 * @component
 */
export default SkeletonTable;
