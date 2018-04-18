import styled from 'styled-components';
import get from 'extensions/themeGet';
import Input from './ToggleInput';

export const SIZE = '30px';

export default styled.label`
  cursor: pointer;
  position: relative;
  padding-right: 0;
  padding-left: 72px; /* 58px width + 2px border + 2px border + 10px spacing */
  user-select: none;
  transition: all 0.2s ease;
  line-height: calc(${SIZE} * 1.166);
  font-family: ${get('fonts.brand')};
  font-weight: 300;
  display: inline;

  &::before {
    content: '';
    box-sizing: border-box;
    border-width: ${get('thicknesses.wide')};
    border-style: solid;
    border-radius: 15px;
    width: 58px;
    height: ${SIZE};
    display: block;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.2s ease;
  }
  
  
  ${Input}:enabled + &:hover::before {
    box-shadow: ${get('shadows.focusOutline')};
  }

  &::after {
    content: '';
    box-sizing: border-box;
    border-width: ${get('thicknesses.wide')};
    border-style: solid;
    border-radius: 15px;
    width: ${SIZE};
    height: ${SIZE};
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    display: block;
    transition: all 0.2s ease;
  }

  ${Input}:focus + &::before {
    box-shadow: ${get('shadows.focusOutline')};
  }

  ${Input} + &::before {
    background: ${get('colors.background.default')};
    border-color: ${get('colors.primary.dark')};
  }

  ${Input} + &::after {
    background: ${get('colors.text.inverted')};
    border-color: ${get('colors.primary.dark')};
  }

  ${Input} + &:hover::before, ${Input} + &:hover::after {
    border-color: ${get('colors.primary.dark')};
  }

  ${Input}:checked + & {
    &::before {
      background: ${get('colors.primary.dark')};
      border-color: ${get('colors.primary.dark')};
    }

    &::after {
      left: ${SIZE};
      background: ${get('colors.text.inverted')};
      border-color: ${get('colors.primary.dark')};
    }
  }

  ${Input}:disabled + & {
    cursor: default;
    color: ${get('colors.gray.border')};
    
    &::before,
    &::after {
      border-color: ${get('colors.border.disabled')};
      background: ${get('colors.background.disabled')};
    }
  }
  
  ${Input}:checked:disabled + &::before {
    background: ${get('colors.background.disabledSelected')};
  }
`;
