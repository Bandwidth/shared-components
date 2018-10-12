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

const BlobFieldGridContainer = styled.div`
  display: grid;
  grid-auto-rows: min-content;
  grid-gap: ${({ gridGap = '30px' }) => gridGap};
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
  animation: ${pulse} ${PULSE_RATE} ease-in-out infinite alternate;
  animation-delay: ${({ __fieldIdx = 0 }) =>
    `calc(${__fieldIdx} / 5 * ${PULSE_RATE})`};
  animation-play-state: ${({ loading }) => (loading ? 'running' : 'paused')};
`;

const BlobFieldContent = styled.div`
  min-width: ${({ minWidth }) => minWidth};
  width: ${({ width }) => width};
  height: ${({ height }) => height || '1em'};
  visibility: ${({ hide }) => (hide ? 'hidden' : 'visible')};
  background: ${props => themeGet(props.color || 'colors.gray.light')(props)};
  border-radius: 0.5em;
`;

const BlobField = ({
  loading,
  marginBetween = '8px',
  columnSpan,
  helpText,
  __fieldIdx,
}) => (
  <BlobFieldContainer
    __fieldIdx={__fieldIdx}
    loading={loading}
    marginBetween={marginBetween}
    columnSpan={columnSpan}
  >
    <BlobFieldContent
      minWidth="100px"
      width={`${Math.random() * 25 + 25}%`}
      height="14px"
    />
    <BlobFieldContent height="53px" />
    <BlobFieldContent
      hide={!helpText}
      minWidth="100px"
      width={`${Math.random() * 25 + 25}%`}
      height="14px"
    />
  </BlobFieldContainer>
);

BlobField.Grid = BlobFieldGrid;

export default BlobField;
