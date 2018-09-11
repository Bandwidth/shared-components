import React from 'react';
import styled from 'styled-components';
import themeGet from 'extensions/themeGet';

const Bar = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 0;
  top: 0;
  user-select: none;
  transition: ${props => (props.dragging ? '0' : '0.2s ease all')};

  & > * {
    margin-top: auto;
    margin-right: ${props => props.tickSpacing - 1}px;
  }
`;

const Tick = styled.div`
  border-left: 1px solid ${themeGet('colors.border.medium')};
  height: ${props => (props.primary ? '10px' : '5px')};
  position: relative;

  &::after {
    content: '${props => props.label}';
    font-size: 12px;
    position: absolute;
    bottom: 70%;
    transform: translateX(-50%);
    white-space: pre;
    opacity: ${props => (props.enabled ? 1 : 0.5)};
  }
`;

const getTickLabel = idx => {
  if (idx % 4 !== 0) {
    return '';
  }

  const hour = idx / 4;
  const pm = hour > 11 && hour < 24;
  const displayHour = hour % 12 === 0 ? 12 : hour % 12;
  return `${displayHour} ${pm ? 'PM' : 'AM'}`;
};

const rangeContains = (range, value) => value >= range[0] && value <= range[1];

const Timeline = ({ tickSpacing, allowedRange, ...rest }) => (
  <Bar tickSpacing={tickSpacing} {...rest}>
    {new Array(97).fill(null).map((_, idx) => (
      <Tick
        key={idx}
        primary={idx % 4 === 0}
        label={getTickLabel(idx)}
        enabled={idx !== 96 && rangeContains(allowedRange, idx / 4.0)}
      />
    ))}
  </Bar>
);

Timeline.defaultProps = {
  tickSpacing: 11,
  allowedRange: [0, 24],
};

export default Timeline;
