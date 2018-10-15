import React from 'react';
import styled from 'styled-components';
import themeGet from 'extensions/themeGet';
import pulse from 'skeletons/common/pulse';
import Blob from './Blob';

const BlobFieldGridContainer = styled.div`
  display: grid;
  grid-auto-rows: min-content;
  grid-gap: ${({ gridGap = 'var(--spacing-large)' }) => gridGap};
  grid-template-columns: ${({
    columns = 2,
    minSize = 'min-content',
    maxSize = '1fr',
  }) => `repeat(${columns}, minmax(${minSize}, ${maxSize}))`};
`;

class BlobFieldGrid extends React.Component {
  render() {
    return (
      <BlobFieldGridContainer {...this.props}>
        {React.Children.map(this.props.children, (child, idx) =>
          React.cloneElement(child, { __fieldIdx: idx }),
        )}
      </BlobFieldGridContainer>
    );
  }
}

const BlobFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: ${({ columnSpan = 1 }) => columnSpan} span;
  & > * + * {
    margin-top: ${({ marginBetween }) => marginBetween};
  }
  animation: ${pulse} var(--skeleton-pulse-normal) ease-in-out infinite
    alternate;
  animation-delay: ${({ __fieldIdx = 0 }) =>
    `calc(${__fieldIdx} / 5 * var(--skeleton-pulse-normal))`};
  animation-play-state: ${({ disableAnimation }) =>
    disableAnimation ? 'paused' : 'running'};
`;

const BlobFieldContent = styled(Blob)`
  min-width: ${({ minWidth }) => minWidth};
  visibility: ${({ hide }) => (hide ? 'hidden' : 'visible')};
  border-radius: 0.5em;
`;

const BlobField = ({
  disableAnimation,
  marginBetween = '8px',
  labelHeight = '14px',
  fieldContentHeight = '53px',
  columnSpan,
  helpText,
  __fieldIdx,
}) => (
  <BlobFieldContainer
    __fieldIdx={__fieldIdx}
    disableAnimation={disableAnimation}
    marginBetween={marginBetween}
    columnSpan={columnSpan}
  >
    <BlobFieldContent
      minWidth="100px"
      width={`${Math.random() * Math.random() * 70 + 20}%`}
      height={labelHeight}
    />
    <BlobFieldContent height={fieldContentHeight} />
    <BlobFieldContent
      hide={!helpText}
      minWidth="100px"
      width={`${Math.random() * Math.random() * 70 + 20}%`}
      height={labelHeight}
    />
  </BlobFieldContainer>
);

BlobField.Grid = BlobFieldGrid;

/**
 * @component
 */
export default BlobField;
