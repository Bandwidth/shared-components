import styled, { keyframes } from 'styled-components';
import themeGet from 'extensions/themeGet';

const PULSE_RATE = '1.6s';

const pulse = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0.5;
  }
`;

export default styled.div`
  height: ${({ height }) => height || '1em'};
  width: ${({ width }) => width || '1em'};
  background: ${props => themeGet(props.color || 'colors.gray.light')(props)};
  border-radius: 1em;
  display: inline-block;
  animation-delay: ${({ index = 0 }) => `calc(${index / 4} * ${PULSE_RATE})`};
  animation: ${pulse} ${PULSE_RATE} ease-in-out infinite alternate;
  animation-play-state: ${({ loading }) => (loading ? 'running' : 'paused')};
`;
