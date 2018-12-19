import React from 'react';
import styled from 'styled-components';
import userSpacing from 'extensions/userSpacing';
import Skeleton from 'skeletons/Skeleton';

const SkeletonParagraphContainer = styled.div.attrs({
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
  <SkeletonParagraphContainer
    spacing={spacing}
    width={width}
    marginBetween={marginBetween}
  >
    {Array.from(Array(lines).keys()).map(rowIdx => (
      <Skeleton
        animated={!disableAnimation}
        key={rowIdx}
        height={rowHeight}
        width="95%"
      />
    ))}
  </SkeletonParagraphContainer>
);
