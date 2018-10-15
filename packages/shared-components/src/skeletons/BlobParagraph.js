import React from 'react';
import styled, { keyframes } from 'styled-components';
import themeGet from 'extensions/themeGet';
import pulse from 'skeletons/common/pulse';

const BlobParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  & > * + * {
    margin-top: ${({ marginBetween }) => marginBetween};
  }
`;

const BlobParagraphRow = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height || '1em'};
  background: ${props =>
    themeGet(props.color || 'skeleton.colors.default')(props)};
  border-radius: 1em;
  animation: ${pulse} var(--skeleton-pulse-normal) ease-in-out infinite
    alternate;
  animation-delay: ${({ index = 0 }) =>
    `calc(${index} / 8 * var(--skeleton-pulse-normal))`};
  animation-play-state: ${({ disableAnimation }) =>
    disableAnimation ? 'paused' : 'running'};
`;

/**
 * @component
 */
export default ({
  disableAnimation,
  width,
  rowHeight = '14px',
  lines = 5,
  marginBetween = '8px',
}) => (
  <BlobParagraphContainer
    disableAnimation={disableAnimation}
    width={width}
    marginBetween={marginBetween}
  >
    {Array.from(Array(lines).keys()).map(rowIdx => (
      <BlobParagraphRow
        key={rowIdx}
        index={rowIdx}
        disableAnimation={disableAnimation}
        height={rowHeight}
        width={`${(1 - Math.random() * Math.random()) * 70 + 30}%`}
      />
    ))}
  </BlobParagraphContainer>
);
