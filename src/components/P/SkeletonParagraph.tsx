import React from 'react';
import styled from 'styled-components';
import userSpacing, { SpacingProps } from '../../extensions/userSpacing';
import Skeleton from 'skeletons/Skeleton';

interface SkeletonParagraph extends SpacingProps {
  disableAnimation: boolean;
  rowHeight: string | number;
  lines: number;
  marginBetween: string;
}

const SkeletonParagraphContainer = styled.div<
  {
    marginBetween: string;
  } & SpacingProps
>`
  margin: ${userSpacing.text};
  display: flex;
  flex-direction: column;
  & > * + * {
    margin-top: ${({ marginBetween }) => marginBetween};
  }
`;

const SkeletonParagraph: React.SFC<SkeletonParagraph> = ({
  spacing,
  disableAnimation,
  rowHeight = '14px',
  lines = 5,
  marginBetween = '8px',
}) => (
  <SkeletonParagraphContainer spacing={spacing} marginBetween={marginBetween}>
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

export default SkeletonParagraph;
