import styled from 'styled-components';
import get from 'extensions/themeGet';
import Input from './ToggleInput';

export const SIZE = '30px';
const TOGGLE_WIDTH = '58px';

export default styled.label`
  display: block;
  cursor: pointer;
  position: relative;
  user-select: none;

  padding-right: 0;
  padding-left: calc(${TOGGLE_WIDTH} + var(--spacing-small));
  padding-top: 4px;
  padding-bottom: 5px;
  transition: all 0.2s ease;
  line-height: 1.5;
  font-family: var(--fonts-brand);
  font-weight: 300;

  &::before {
    content: '';
    box-sizing: border-box;
    border-width: var(--thicknesses-wide);
    border-style: solid;
    border-radius: 15px;
    width: ${TOGGLE_WIDTH};
    height: ${SIZE};
    display: block;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.2s ease;
  }


  ${Input}:enabled + &:hover::before {
    box-shadow: var(--shadows-focus-outline);
  }

  &::after {
    content: '';
    box-sizing: border-box;
    border-width: var(--thicknesses-wide);
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
    box-shadow: var(--shadows-focus-outline);
  }

  ${Input} + &::before {
    background: var(--colors-background-default);
    border-color: var(--colors-primary-dark);
  }

  ${Input} + &::after {
    background: var(--colors-text-inverted);
    border-color: var(--colors-primary-dark);
  }

  ${Input} + &:hover::before, ${Input} + &:hover::after {
    border-color: var(--colors-primary-dark);
  }

  ${Input}:checked + & {
    &::before {
      background: var(--colors-primary-dark);
      border-color: var(--colors-primary-dark);
    }

    &::after {
      left: ${SIZE};
      background: var(--colors-text-inverted);
      border-color: var(--colors-primary-dark);
    }
  }

  ${Input}:disabled + & {
    cursor: default;
    color: var(--colors-gray-border);

    &::before,
    &::after {
      border-color: var(--colors-border-disabled);
      background: var(--colors-background-disabled);
    }
  }

  ${Input}:checked:disabled + &::before {
    background: var(--colors-background-disabled-selected);
  }
`;
