import React from 'react';
import styled, { css, StyledComponentClass } from 'styled-components';
import themeGet from 'extensions/themeGet';
import pulse from 'skeletons/common/pulse';
import SkeletonGroup, { SkeletonGroupProps } from './SkeletonGroup';

export interface SkeletonProps {
  /**
   * The width of the skeleton
   */
  width?: string | number;
  /**
   * The height of the skeleton
   */
  height?: string | number;
  /**
   * How rounded the skeleton is
   */
  borderRadius?: string | number;
  /**
   * The CSS display value for the skeleton
   */
  display?: string;
  /**
   * Should the skeleton animate?
   */
  animated?: boolean;
  /**
   * Disable the skeleton animation
   */
  disableAnimation?: boolean;
}

type StyledSkeleton = StyledComponentClass<
  React.ClassAttributes<HTMLDivElement> &
    React.HTMLAttributes<HTMLDivElement> &
    SkeletonProps,
  any
>;

interface Skeleton extends StyledSkeleton {
  Animated?: React.SFC<SkeletonProps>;
  Group?: React.SFC<SkeletonGroupProps>;
}

const Skeleton: Skeleton = styled.div<SkeletonProps>`
  height: ${({ height = '30px' }) => height};
  width: ${({ width = '100%' }) => width};
  background: ${props =>
    props.color || themeGet('skeleton.colors.default')(props)};
  border-radius: ${({ borderRadius = '1em' }) => borderRadius};
  display: ${({ display = 'inline-block' }) => display};

  ${({ animated }) =>
    animated &&
    css`
      animation-name: ${pulse};
      animation-duration: var(--skeleton-pulse-normal);
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
      animation-direction: alternate;
      animation-play-state: ${({ disableAnimation }) =>
        disableAnimation ? 'paused' : 'running'};

      &:nth-of-type(5n + 1) {
        animation-delay: calc(0 * var(--skeleton-pulse-normal));
      }
      &:nth-of-type(5n + 2) {
        animation-delay: calc(1 / 5 * var(--skeleton-pulse-normal));
      }
      &:nth-of-type(5n + 3) {
        animation-delay: calc(2 / 5 * var(--skeleton-pulse-normal));
      }
      &:nth-of-type(5n + 4) {
        animation-delay: calc(3 / 5 * var(--skeleton-pulse-normal));
      }
      &:nth-of-type(5n + 0) {
        animation-delay: calc(4 / 5 * var(--skeleton-pulse-normal));
      }
    `};
`;

Skeleton.Animated = props => <Skeleton {...props} animated />;
Skeleton.Group = SkeletonGroup;

export default Skeleton;
