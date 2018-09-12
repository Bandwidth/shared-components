import React from 'react';
import styled from 'styled-components';
import themeGet from 'extensions/themeGet';
import Icon from '../../Icon';

const NudgeButtonBorder = styled.button`
  padding: ${themeGet('spacing.medium')} ${themeGet('spacing.small')};
  border: ${themeGet('thicknesses.wide')} solid
    ${themeGet('colors.border.medium')};
  background: ${themeGet('colors.background.default')};
  color: ${themeGet('colors.gray.default')};
  outline: none;
  cursor: pointer;
  transition: 0.2s ease all;

  &:focus,
  &:active {
    outline: none;
  }

  &:focus {
    border-color: ${themeGet('colors.primary.default')};
  }

  &:disabled {
    background: ${themeGet('colors.background.disabled')};
    border-color: ${themeGet('colors.border.disabled')};
    cursor: default;
  }
`;

/**
 * A simple button which moves the time scrubber value forward or backward
 */
const NudgeButton = ({ direction, ...rest }) => (
  <NudgeButtonBorder {...rest}>
    <Icon name={direction === 'left' ? 'back' : 'forward'} />
  </NudgeButtonBorder>
);

NudgeButton.defaultProps = {
  direction: 'left',
};

export default NudgeButton;
