import React from 'react';
import styled, { keyframes } from 'styled-components';
import themeGet from 'extensions/themeGet';
import pulse from 'skeletons/common/pulse';

const BlobTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  & > * + * {
    margin-top: ${({ marginBetween }) => marginBetween};
  }
`;

const BlobTableHeader = styled.div`
  height: ${({ height }) => height || '1em'};
  background: ${props =>
    themeGet(props.color || 'skeleton.colors.dark')(props)};
  border-radius: 0.5em;
  animation: ${pulse} var(--skeleton-pulse-normal) ease-in-out infinite
    alternate;
  animation-play-state: ${({ disableAnimation }) =>
    disableAnimation ? 'running' : 'paused'};
`;

const BlobTableRow = styled.div`
  display: flex;
  flex-direction: row;
  & > * + * {
    margin-left: ${({ marginBetween }) => marginBetween};
  }
  & > * {
    flex-grow: 1;
  }
`;

const BlobTableCell = styled.div`
  height: ${({ height }) => height || '1em'};
  background: ${props =>
    themeGet(props.color || 'skeleton.colors.default')(props)};
  border-radius: 0.5em;
  animation: ${pulse} var(--skeleton-pulse-fast) ease-in-out infinite alternate;
  animation-delay: ${({ pctOffset = 0 }) =>
    `calc(${pctOffset} * var(--skeleton-pulse-fast))`};
  animation-play-state: ${({ disableAnimation }) =>
    disableAnimation ? 'paused' : 'running'};
`;

const BlobTable = ({
  disableAnimation,
  width,
  rowHeight = '40px',
  columns = 3,
  rows = 4,
  marginBetween = '2px',
}) => (
  <BlobTableContainer
    disableAnimation={disableAnimation}
    width={width}
    marginBetween={marginBetween}
  >
    <BlobTableHeader disableAnimation={disableAnimation} height={rowHeight} />
    {Array.from(Array(rows).keys()).map(rowIdx => (
      <BlobTableRow marginBetween={marginBetween} key={rowIdx}>
        {Array.from(Array(columns).keys()).map(colIdx => (
          <BlobTableCell
            pctOffset={colIdx / columns}
            key={colIdx}
            disableAnimation={disableAnimation}
            height={rowHeight}
          />
        ))}
      </BlobTableRow>
    ))}
  </BlobTableContainer>
);

BlobTable.Small = props => <BlobTable rowHeight="23px" {...props} />;

/**
 * @component
 */
export default BlobTable;
