import styled from 'styled-components';
import get from 'extensions/themeGet';
import Input from './RadioGroupButtonInput';

const RadioGroupButtonLabel = styled.label`
  border-width: ${get('thicknesses.thick')};
  border-style: solid;
  border-color: ${get('colors.primary.dark')};
  padding: 1em 15px;
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  background: ${get('colors.background.default')};
  color: ${get('colors.primary.dark')};
  transition: opacity 0.2s ease, background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1em;
  height: 100%;
  min-width: 53px;
  box-shadow: inset 0 0 0 ${get('colors.primary.default')};
  user-select: none;

  ${Input}:not(:checked):focus:not(:disabled) + &,
  ${Input}:not(:checked):hover:not(:disabled) + & {
    z-index: 3;
  }

  ${Input}:focus:not(:disabled) + &,
  ${Input}:hover:not(:disabled) + &,
  ${Input}:active:not(:disabled) + & {
    &::before {
      content: '';
      box-shadow: var(--shadows-focus-outline);
      position: absolute;
      bottom: -2px;
      left: -2px;
      right: -2px;
      top: -2px;
      z-index: 2;
      border-radius: 3px;
    }
  }

  ${Input}:checked + & {
    background: ${get('colors.primary.dark')};
    color: ${get('colors.text.inverted')};
    box-shadow: inset 0 -5px 0 ${get('colors.primary.default')};
    z-index: 1;
  }

  ${Input}:disabled + & {
    z-index; -1;
    cursor: default;
    color: ${get('colors.text.disabled')};
    background-color: ${get('colors.background.disabled')};
    border-color: ${get('colors.border.disabled')};
  }
  ${Input}:checked:disabled + & {
    color: ${get('colors.text.inverted')};
    background-color: ${get('colors.background.disabledSelected')};
    box-shadow: inset 0 -5px 0 ${get('colors.background.disabled')};
  }
`;

RadioGroupButtonLabel.Small = styled(RadioGroupButtonLabel)`
  font-size: 0.8em;
  padding: 3px 10px;
  font-weight: normal;
  min-width: 30px;

  ${Input}:checked + & {
    box-shadow: inset 0 -4px 0 ${get('colors.primary.default')};
  }

  ${Input}:checked:disabled + & {
    box-shadow: inset 0 -4px 0 ${get('colors.background.disabled')};
  }
`;

export default RadioGroupButtonLabel;
