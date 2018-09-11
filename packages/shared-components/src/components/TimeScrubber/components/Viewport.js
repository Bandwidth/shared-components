import React from 'react';
import styled from 'styled-components';
import themeGet from 'extensions/themeGet';
import Timeline from './Timeline';
import TimeDisplay from './TimeDisplay';

const Indicator = styled.div`
  position: absolute;
  z-index: 1;
  left: 50%;
  transform: translateX(-1px);
  background: ${themeGet('colors.text.default')};
  width: 3px;
  height: 4px;
  bottom: 0;
`;

const Overlay = styled.div`
  pointer-events: none;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 2;
`;

const Window = styled.div`
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  width: 100%;
  cursor: ${props => (props.disabled ? 'default' : 'grab')};
  pointer-events: ${props => (props.disabled ? 'none' : 'initial')};
  border: ${themeGet('thicknesses.wide')} solid
    ${themeGet('colors.border.medium')};
  border-left: 0;
  border-right: 0;
  height: 53px;
  background: ${themeGet('colors.background.default')};
  transition: all 0.2s ease;

  &:focus {
    outline: 0;

    box-shadow: inset 0 -5px 0 ${themeGet('colors.primary.light')};
  }
`;

const Centered = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0;
  top: 0;
`;

const Viewport = ({ children, time, ...rest }) => (
  <Window {...rest} tabIndex={0}>
    <Centered>{children}</Centered>
    <Indicator />
    <TimeDisplay time={time} />
  </Window>
);

export default Viewport;
