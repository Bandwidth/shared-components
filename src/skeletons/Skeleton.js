import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import themeGet from 'extensions/themeGet';
import pulse from 'skeletons/common/pulse';
import SkeletonGroup from './SkeletonGroup';

/**
 * @component
 */
const Skeleton = styled.div`
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
