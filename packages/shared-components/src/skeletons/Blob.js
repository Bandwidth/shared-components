import React from 'react';
import styled, { css } from 'styled-components';
import themeGet from 'extensions/themeGet';
import pulse from 'skeletons/common/pulse';

/**
 * @component
 */
const Blob = styled.div`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  background: ${props =>
    themeGet(props.color || 'skeleton.colors.default')(props)};
  border-radius: ${({ borderRadius = '1em' }) => borderRadius};
  display: inline-block;

  ${({ animated }) =>
    animated &&
    css`
      animation: ${pulse} var(--skeleton-pulse-normal) ease-in-out infinite
        alternate;
      animation-delay: ${({ index = 0 }) =>
        `calc(${index / 4} * var(--skeleton-pulse-normal))`};
      animation-play-state: ${({ disableAnimation }) =>
        disableAnimation ? 'paused' : 'running'};
    `};
`;

Blob.Animated = props => <Blob {...props} animated />;

export default Blob;
