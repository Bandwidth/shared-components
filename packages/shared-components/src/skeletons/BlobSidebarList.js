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
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > * + * {
    margin-top: ${({ marginBetween }) => marginBetween};
  }
  &:first-child {
    border-top: ${themeGet('thicknesses.normal')} solid
      ${props => themeGet(props.color || 'colors.gray.mediumLight')(props)};
  }
  border-bottom: ${themeGet('thicknesses.normal')} solid
    ${props => themeGet(props.color || 'colors.gray.mediumLight')(props)};
  animation: ${pulse} ${PULSE_RATE} ease-in-out infinite alternate;
  animation-delay: ${({ index = 0 }) => `calc(${index} / 4 * ${PULSE_RATE})`};
  animation-play-state: ${({ disableAnimation }) =>
    disableAnimation ? 'paused' : 'running'};
`;

const BlobSidebarListItem = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height || '1em'};
  background: ${props => themeGet(props.color || 'colors.gray.light')(props)};
  border-radius: 1em;
`;

const BlobList = ({
  disableAnimation,
  width,
  contentWidth,
  rowHeight = '82px',
  rows = 4,
}) => (
  <BlobSidebarListContainer disableAnimation={disableAnimation} width={width}>
    {Array.from(Array(rows).keys()).map(rowIdx => (
      <BlobSidebarListRow
        disableAnimation={disableAnimation}
        marginBetween="8px"
        height={rowHeight}
        key={rowIdx}
        index={rowIdx}
      >
        <BlobSidebarListItem
          height="14px"
          width={
            contentWidth
              ? `calc(${Math.random() * 0.2 + 0.8} * ${contentWidth})`
              : `${Math.random() * 20 + 80}%`
          }
        />
        <BlobSidebarListItem
          height="14px"
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

export default BlobList;
