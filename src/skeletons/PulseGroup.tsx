import React, { FunctionComponent, ComponentClass } from 'react';
import styled from 'styled-components';
import pulse from 'skeletons/common/pulse';

/**
 * Modifies a component to include pulsing.
 */
export const withPulseGroup = <T extends {}>(
  Component: FunctionComponent<T> | ComponentClass<T>,
) =>
  styled<any>(Component)`
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

const DefaultPulse = styled.div<DefaultPulseProps>`
  width: ${({ width = '100%' }) => width};
  height: ${({ height }) => height};
`;

export default withPulseGroup(DefaultPulse);
