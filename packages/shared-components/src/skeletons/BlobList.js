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

const BlobListContainer = styled.div`
  width: ${({ width }) => width};
  display: flex;
  flex-direction: column;
  & > * + * {
    margin-top: ${({ marginBetween }) => marginBetween};
  }
`;

const BlobListRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  & > * + * {
    margin-left: ${({ marginBetween }) => marginBetween};
  }
  animation: ${pulse} ${PULSE_RATE} ease-in-out infinite alternate;
  animation-delay: ${({ index = 0 }) => `calc(${index} / 4 * ${PULSE_RATE})`};
  animation-play-state: ${({ loading }) => (loading ? 'running' : 'paused')};
`;

const BlobListItem = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height || '1em'};
  background: ${props => themeGet(props.color || 'colors.gray.light')(props)};
  border-radius: ${({ borderRadius }) => borderRadius || '1em'};
  flex-grow: ${({ flexGrow }) => (flexGrow ? 1 : 0)};
`;

const BlobList = ({
  loading,
  width,
  rowHeight = '41px',
  rows = 4,
  marginBetween = '3px',
}) => (
  <BlobListContainer
    loading={loading}
    width={width}
    marginBetween={marginBetween}
  >
    {Array.from(Array(rows).keys()).map(rowIdx => (
      <BlobListRow
        loading={loading}
        marginBetween={marginBetween}
        key={rowIdx}
        index={rowIdx}
        width={`${Math.random() * 20 + 80}%`}
      >
        <BlobListItem borderRadius="2em" width={rowHeight} height={rowHeight} />
        <BlobListItem flexGrow height="14px" />
      </BlobListRow>
    ))}
  </BlobListContainer>
);

export default BlobList;
