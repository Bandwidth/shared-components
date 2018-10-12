import React from 'react';
import styled, { keyframes } from 'styled-components';
import themeGet from 'extensions/themeGet';

const PULSE_RATE = '1.6s';
const ROW_PULSE_RATE = '.8s';

const pulse = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0.5;
  }
`;

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
    themeGet(props.color || 'colors.gray.mediumLight')(props)};
  border-radius: 0.5em;
  animation: ${pulse} ${PULSE_RATE} ease-in-out infinite alternate;
  animation-play-state: ${({ loading }) => (loading ? 'running' : 'paused')};
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
  background: ${props => themeGet(props.color || 'colors.gray.light')(props)};
  border-radius: 0.5em;
  animation: ${pulse} ${ROW_PULSE_RATE} ease-in-out infinite alternate;
  animation-delay: ${({ pctOffset = 0 }) =>
    `calc(${pctOffset} * ${ROW_PULSE_RATE})`};
  animation-play-state: ${({ loading }) => (loading ? 'running' : 'paused')};
`;

const BlobTable = ({
  loading,
  width,
  rowHeight = '41px',
  columns = 3,
  rows = 4,
  marginBetween = '3px',
}) => (
  <BlobTableContainer
    loading={loading}
    width={width}
    marginBetween={marginBetween}
  >
    <BlobTableHeader loading={loading} height={rowHeight} />
    {Array.from(Array(rows).keys()).map(rowIdx => (
      <BlobTableRow marginBetween={marginBetween} key={rowIdx}>
        {Array.from(Array(columns).keys()).map(colIdx => (
          <BlobTableCell
            pctOffset={colIdx / columns}
            key={colIdx}
            loading={loading}
            height={rowHeight}
          />
        ))}
      </BlobTableRow>
    ))}
  </BlobTableContainer>
);

BlobTable.Small = props => <BlobTable rowHeight="21px" {...props} />;

export default BlobTable;
