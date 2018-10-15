import React from 'react';
import styled from 'styled-components';
import themeGet from 'extensions/themeGet';
import pulse from 'skeletons/common/pulse';
import Blob from './Blob';

const BlobTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  & > * + * {
    margin-top: ${({ marginBetween }) => marginBetween};
  }
`;

const BlobTableHeader = styled(Blob.Animated)`
  background: var(--skeleton-colors-dark);
  border-radius: 0.5em;
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

const BlobTableCell = styled(Blob.Animated)`
  border-radius: 0.5em;
  animation-duration: var(--skeleton-pulse-fast);
  animation-delay: ${({ pctOffset = 0 }) =>
    `calc(${pctOffset} * var(--skeleton-pulse-fast))`};
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
