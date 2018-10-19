import React from 'react';
import styled from 'styled-components';
import tag from 'clean-tag';
import userSpacing from 'extensions/userSpacing';
import Blob from 'skeletons/Blob';

const BlobParagraphContainer = styled(tag.div).attrs({
  spacing: userSpacing,
})`
  margin: ${props => props.spacing};
  display: flex;
  flex-direction: column;
  & > * + * {
    margin-top: ${({ marginBetween }) => marginBetween};
  }
`;

/**
 * @component
 */
export default ({
  spacing,
  disableAnimation,
  width,
  rowHeight = '14px',
  lines = 5,
  marginBetween = '8px',
}) => (
  <BlobParagraphContainer
    spacing={spacing}
    width={width}
    marginBetween={marginBetween}
  >
    {Array.from(Array(lines).keys()).map(rowIdx => (
      <Blob
        animated={!disableAnimation}
        key={rowIdx}
        height={rowHeight}
        width={`${(1 - Math.random() * Math.random()) * 70 + 30}%`}
      />
    ))}
  </BlobParagraphContainer>
);
