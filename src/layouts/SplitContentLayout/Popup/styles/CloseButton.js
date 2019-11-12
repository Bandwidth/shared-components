import React from 'react';
import { Icon } from 'components';
import { themeGet } from 'extensions';
import styled from 'styled-components';

const FloatingContainer = styled.button`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid ${themeGet('colors.border.medium')};
  padding: 7px 20px;
  color: ${themeGet('colors.primary.alternate')};
  border-radius: 18px;
  background-color: ${themeGet('colors.background.default')};
  opacity: ${props => (props.visible ? 1 : 0)};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  cursor: pointer;
  transition: 0.2s ease all;

  & > ${Icon} {
    color: inherit;
    margin-right: 0.5em;
  }

  &:hover,
  &:focus,
  &:active {
    outline: 0;
    box-shadow: ${themeGet('shadows.focusOutline')};
  }

  &:hover {
    background-color: ${themeGet('colors.gray.light')};
  }
`;

export default props => (
  <FloatingContainer {...props}>
    <Icon name="delete" />
    Close
  </FloatingContainer>
);
