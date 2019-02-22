import React from 'react';
import styled from 'styled-components';
import pulse from 'skeletons/common/pulse';

interface WithPulseGroupProps {
  /**
   * Should animation be disabled?
   */
  disableAnimation?: boolean;
}

/**
 * Modifies a component to include pulsing.
 */
export const withPulseGroup = <T extends {}>(
  Component: React.ComponentClass<T>,
) =>
  styled<T & WithPulseGroupProps>(Component)`
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
  `;

export interface DefaultPulseProps {
  /**
   * The width
   */
  width?: number | string;
  /**
   * The height
   */
  height?: number | string;
}

export default withPulseGroup(styled.div<DefaultPulseProps>`
  width: ${({ width = '100%' }) => width};
  height: ${({ height }) => height};
`);
