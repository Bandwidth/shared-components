import styled from 'styled-components';
import get from 'extensions/themeGet';
import Input from './RadioGroupButtonInput';

const RadioGroupButtonLabel = styled.label`
  border-width: ${get('thicknesses.thick')};
  border-style: solid;
  border-color: ${get('colors.primary.dark')};
  padding: 1em 1.4em;
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  background: ${get('colors.background.default')};
  color: ${get('colors.primary.dark')};
  transition: opacity 0.2s ease, background 0.2s ease, color 0.2s ease;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1em;
  height: 100%;

  &::after {
    content: '';
    background: ${get('colors.primary.default')};
    height: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: block;
    transition: height 0.2s ease, opacity 0.2s ease;
  }

  ${Input}:hover:not(:disabled):not(:checked) + &,
  ${Input}:focus:not(:disabled):not(:checked) + & {
    &::after {
      height: 5px;
      opacity: 0.5;
    }
  }

  ${Input}:checked:hover:not(:disabled) + & {
  }

  ${Input}:checked + & {
    opacity: 1;
    background: ${get('colors.primary.dark')};
    color: ${get('colors.text.inverted')};
    &::after {
      height: 5px;
    }
  }

  ${Input}:disabled + & {
    color: ${get('colors.text.default')};
    opacity: 0.5;
    background-color: ${get('colors.gray.disabled')};
    border-color: ${get('colors.border.medium')};
    cursor: auto;
    &::after {
      background: ${get('colors.gray.border')};
    }
  }
`;

RadioGroupButtonLabel.Small = styled(RadioGroupButtonLabel)`
  font-size: 0.8em;
  padding: 0.83em 1em;
  font-weight: normal;

  ${Input}:hover + &::after,
  ${Input}:checked + &::after {
    height: 2px;
  }
`;

RadioGroupButtonLabel.Large = styled(RadioGroupButtonLabel)`
  padding: ${get('spacing.large')};
`;

export default RadioGroupButtonLabel;
