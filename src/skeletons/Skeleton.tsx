import React from 'react';
import styled, { css } from 'styled-components';
import themeGet from 'extensions/themeGet';
import dotNotation from 'extensions/dotNotation';
import pulse from 'skeletons/common/pulse';
import SkeletonGroup from './SkeletonGroup';

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
  /**
   * Color of the skeleton
   */
  color?: string;
}

const Skeleton = styled.div<SkeletonProps>`
  height: ${({ height = '30px' }) => height};
  width: ${({ width = '100%' }) => width};
  background: ${props =>
    props.color || themeGet('skeleton.colors.default')(props)};
  border-radius: ${({ borderRadius = '1em' }) => borderRadius};
  display: ${({ display = 'inline-block' }) => display};

  ${({ animated, disableAnimation }) =>
    animated &&
    css`
      animation-name: ${pulse};
      animation-duration: var(--skeleton-pulse-normal);
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
      animation-direction: alternate;
      animation-play-state: ${disableAnimation ? 'paused' : 'running'};

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

const Animated: React.FC<
  SkeletonProps & React.HTMLAttributes<HTMLDivElement>
> = props => <Skeleton {...props} animated />;

/**
 * The basic building block of skeletons. It is intended to be used to build out skeleton versions of components.
 */
export default dotNotation(Skeleton, { Animated, Group: SkeletonGroup });
