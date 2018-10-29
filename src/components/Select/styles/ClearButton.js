import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Icon } from 'components';
import { themeGet } from 'extensions';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ClearButton = styled(Icon)`
  transform: ${props => (props.expanded ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: 0.2s ease all;
  cursor: pointer;
  animation: ${fadeIn} 200ms;

  &:hover {
    color: ${themeGet('colors.primary.default')};
  }
`;

export default props => (
  <ClearButton
    {...props}
    onClick={ev => {
      ev.stopPropagation();
      props.onClick(ev);
    }}
    name="delete2"
  />
);
