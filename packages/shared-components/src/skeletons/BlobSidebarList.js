import React from 'react';
import styled from 'styled-components';
import themeGet from 'extensions/themeGet';
import pulse from 'skeletons/common/pulse';
import Blob from './Blob';

const BlobSidebarListContainer = styled.div`
  width: ${({ width }) => width};
  display: flex;
  flex-direction: column;
  & > * + * {
    margin-top: ${({ marginBetween }) => marginBetween};
  }
`;

const BlobSidebarListRow = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: 0 var(--spacing-medium);
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > * + * {
    margin-top: ${({ marginBetween }) => marginBetween};
  }
  &:first-child {
    border-top: ${({ dividerSize }) => dividerSize} solid
      var(--skeleton-colors-dark);
  }
  border-bottom: ${({ dividerSize }) => dividerSize} solid
    var(--skeleton-colors-dark);
  animation: ${pulse} var(--skeleton-pulse-normal) ease-in-out infinite
    alternate;
  animation-delay: ${({ index = 0 }) =>
    `calc(${index} / 4 * var(--skeleton-pulse-normal))`};
  animation-play-state: ${({ disableAnimation }) =>
    disableAnimation ? 'paused' : 'running'};
`;

const BlobList = ({
  disableAnimation,
  width,
  contentWidth,
  dividerSize = 'var(--thicknesses-normal)',
  marginBetween = '8px',
  rowHeight = '82px',
  itemHeight = '14px',
  rows = 4,
}) => (
  <BlobSidebarListContainer disableAnimation={disableAnimation} width={width}>
    {Array.from(Array(rows).keys()).map(rowIdx => (
      <BlobSidebarListRow
        dividerSize={dividerSize}
        disableAnimation={disableAnimation}
        marginBetween={marginBetween}
        height={rowHeight}
        key={rowIdx}
        index={rowIdx}
      >
        <Blob
          height={itemHeight}
          width={
            contentWidth
              ? `calc(${Math.random() * 0.2 + 0.8} * ${contentWidth})`
              : `${Math.random() * 20 + 80}%`
          }
        />
        <Blob
          height={itemHeight}
          width={
            contentWidth
              ? `calc(${Math.random() * 0.2 + 0.8} * ${contentWidth})`
              : `${Math.random() * 20 + 80}%`
          }
        />
      </BlobSidebarListRow>
    ))}
  </BlobSidebarListContainer>
);

/**
 * @component
 */
export default BlobList;
