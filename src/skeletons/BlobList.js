import React from 'react';
import styled from 'styled-components';
import PulseGroup from 'skeletons/PulseGroup';
import Blob from './Blob';

const BlobListContainer = styled.div`
  width: ${({ width }) => width};
  display: flex;
  flex-direction: column;
  & > * + * {
    margin-top: ${({ marginBetween }) => marginBetween};
  }
`;

const BlobListRow = PulseGroup(styled.div``);

const BlobList = ({
  disableAnimation,
  width,
  rows = 4,
  marginBetween = '10px',
  children = <Blob width="100%" height="30px" />,
}) => (
  <BlobListContainer
    disableAnimation={disableAnimation}
    width={width}
    marginBetween={marginBetween}
  >
    {Array.from(Array(rows).keys()).map(rowIdx => (
      <BlobListRow disableAnimation={disableAnimation} key={rowIdx}>
        {children}
      </BlobListRow>
    ))}
  </BlobListContainer>
);

/**
 * @component
 */
export default BlobList;
