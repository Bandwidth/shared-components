import styled, { keyframes } from 'styled-components';
import themeGet from 'extensions/themeGet';
import pulse from 'skeletons/common/pulse';

/**
 * @component
 */
export default styled.div`
  height: ${({ height }) => height || '1em'};
  width: ${({ width }) => width || '1em'};
  background: ${props =>
    themeGet(props.color || 'skeleton.colors.default')(props)};
  border-radius: 1em;
  display: inline-block;
  animation-delay: ${({ index = 0 }) =>
    `calc(${index / 4} * var(--skeleton-pulse-normal))`};
  animation: ${pulse} var(--skeleton-pulse-normal) ease-in-out infinite
    alternate;
  animation-play-state: ${({ loading }) => (loading ? 'running' : 'paused')};
`;
