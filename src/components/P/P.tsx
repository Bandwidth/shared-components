import styled, { StyledComponentClass } from 'styled-components';
import userSpacing, { SpacingProps } from '../../extensions/userSpacing';
import SkeletonParagraph from './SkeletonParagraph';

type StyledParagraph = StyledComponentClass<
  React.ClassAttributes<HTMLParagraphElement> &
    React.HTMLAttributes<HTMLParagraphElement> &
    SpacingProps,
  any
>;

interface P extends StyledParagraph {
  Skeleton?: React.SFC<SkeletonParagraph>;
}

const P: P = styled.p<SpacingProps>`
  margin: ${userSpacing.text};
  font-size: 1em;
`;

P.defaultProps = {
  spacing: { bottom: 'lg' },
};

P.Skeleton = SkeletonParagraph;

export default P;
