import React from 'react';
import styled, { keyframes } from 'styled-components';
import themeGet from 'extensions/themeGet';

const PULSE_RATE = '1.6s';

const pulse = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0.5;
  }
`;

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
  background: ${props => themeGet(props.color || 'colors.gray.light')(props)};
  border-radius: 1em;
  animation: ${pulse} ${PULSE_RATE} ease-in-out infinite alternate;
  animation-delay: ${({ index = 0 }) => `calc(${index} / 8 * ${PULSE_RATE})`};
  animation-play-state: ${({ loading }) => (loading ? 'running' : 'paused')};
`;

export default ({
  loading,
  width,
  rowHeight = '14px',
  lines = 4,
  marginBetween = '8px',
}) => (
  <BlobParagraphContainer
    loading={loading}
    width={width}
    marginBetween={marginBetween}
  >
    {Array.from(Array(lines).keys()).map(rowIdx => (
      <BlobParagraphRow
        key={rowIdx}
        index={rowIdx}
        loading={loading}
        height={rowHeight}
        width={`${Math.random() * 20 + 80}%`}
      />
    ))}
  </BlobParagraphContainer>
);
