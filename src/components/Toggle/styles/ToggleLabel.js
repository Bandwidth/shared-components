import styled from 'styled-components';
import get from 'extensions/themeGet';
import Input from './ToggleInput';

export const SIZE = '24px';

export default styled.label`
  cursor: pointer;
  position: relative;
  padding: ${get('spacing.extraSmall')};
  padding-right: 0;
  padding-left: calc(${SIZE} * 2 + ${get('spacing.medium')});
  user-select: none;
  transition: all 0.2s ease;
  line-height: calc(${SIZE} * 1.5);
  font-family: ${get('fonts.brand')};
  font-weight: 300;
  color: ${get('colors.text.default')};
  display: inline;

  &::before {
    content: '';
    border-width: ${get('thicknesses.wide')};
    border-style: solid;
    border-radius: ${SIZE};
    width: calc(${SIZE} * 2);
    height: ${SIZE};
    cursor: pointer;
    display: block;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.2s ease;
  }

  &::after {
    content: '';
    border-width: ${get('thicknesses.wide')};
    border-style: solid;
    border-radius: ${SIZE};
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

    &:hover {
      &::before {
        background: ${get('colors.primary.dark')};
      }
      &::before, &::after {
        border-color: ${get('colors.primary.dark')};
      }
    }
  }

  ${Input}:disabled + & {
    &::before, &::after {
      border-color: ${get('colors.gray.medium')};
    }

    &::before {
      background: ${get('colors.background.disabled')};
    }

    &::after {
      background: ${get('colors.background.disabled')};
    }
  }
`;
