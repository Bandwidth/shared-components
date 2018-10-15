import React from 'react';
import styled from 'styled-components';
import themeGet from 'extensions/themeGet';
import pulse from 'skeletons/common/pulse';
import Blob from './Blob';

const BlobListContainer = styled.div`
  width: ${({ width }) => width};
  display: flex;
  flex-direction: column;
  & > * + * {
    margin-top: ${({ marginBetween }) => marginBetween};
  }
`;

const BlobListRow = styled.div`
  width: ${({ width }) => width};
  display: flex;
  flex-direction: row;
  align-items: center;
  & > * + * {
    margin-left: ${({ marginBetween }) => marginBetween};
  }
  animation: ${pulse} var(--skeleton-pulse-normal) ease-in-out infinite
    alternate;
  animation-delay: ${({ index = 0 }) =>
    `calc(${index} / 4 * var(--skeleton-pulse-normal))`};
  animation-play-state: ${({ disableAnimation }) =>
    disableAnimation ? 'paused' : 'running'};
`;

const BlobListItem = styled(Blob)`
  flex-grow: ${({ flexGrow }) => (flexGrow ? 1 : 0)};
`;

const BlobList = ({
  disableAnimation,
  width,
  rowHeight = '41px',
  itemHeight = '14px',
  rows = 4,
  marginBetween = '3px',
}) => (
  <BlobListContainer
    disableAnimation={disableAnimation}
    width={width}
    marginBetween={marginBetween}
  >
    {Array.from(Array(rows).keys()).map(rowIdx => (
      <BlobListRow
        disableAnimation={disableAnimation}
        marginBetween={marginBetween}
        key={rowIdx}
        index={rowIdx}
        width={`${Math.random() * 20 + 80}%`}
      >
        <Blob borderRadius="2em" width={rowHeight} height={rowHeight} />
        <BlobListItem flexGrow height={itemHeight} />
      </BlobListRow>
    ))}
  </BlobListContainer>
);

/**
 * @component
 */
export default BlobList;
