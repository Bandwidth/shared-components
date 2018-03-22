import styled from 'styled-components';
import get from 'extensions/themeGet';
import Input from './RadioGroupButtonInput';

const RadioGroupButtonLabel = styled.label`
  opacity: 0.5;
  border-width: ${get('thicknesses.normal')};
  border-style: solid;
  border-color: ${get('colors.border.medium')};
  margin-right: -1px;
  padding: 1em 1.4em;
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  background: ${get('colors.background.default')};
  color: ${get('colors.text.default')};
  transition: opacity 0.2s ease;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1em;
  height: 100%;

  &::after {
    content: '';
    background: ${get('colors.primary.default')};
    width: calc(100% + 2px);
    height: 0;
    position: absolute;
    bottom: -1px;
    left: -1px;
    display: block;
    transition: height 0.2s ease, opacity 0.2s ease;
  }

  ${Input}:hover:not(:disabled) + & {
    border-color: ${get('colors.primary.default')};
    &::after {
      height: 5px;
      opacity: 0.5;
    }
  }

  ${Input}:focus:not(:disabled) + & {
    border-color: ${get('colors.border.medium')};
  }

  ${Input}:checked:hover:not(:disabled) + & {
    border-color: ${get('colors.primary.default')};
  }

  ${Input}:checked + & {
    opacity: 1;
    &::after {
      height: 5px;
    }
  }

  ${Input}:disabled + & {
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
