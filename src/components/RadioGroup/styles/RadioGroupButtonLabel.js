import styled from 'styled-components';
import get from 'extensions/themeGet';
import Input from './RadioGroupButtonInput';

const RadioGroupButtonLabel = styled.label`
  border-width: var(--thicknesses-thick);
  border-style: solid;
  border-color: var(--colors-primary-dark);
  padding: 1em;
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  background: var(--colors-background-default);
  color: var(--colors-primary-dark);
  transition: opacity 0.2s ease, background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1em;
  height: 100%;
  min-width: 53px;
  box-shadow: inset 0 0 0 var(--colors-primary-default);

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
    background: var(--colors-primary-dark);
    color: var(--colors-text-inverted);
    box-shadow: inset 0 -5px 0 var(--colors-primary-default);
    z-index: 1;
  }

  ${Input}:disabled + & {
    z-index; -1;
    cursor: default;
    color: var(--colors-text-disabled);
    background-color: var(--colors-background-disabled);
    border-color: var(--colors-border-disabled);
  }
  ${Input}:checked:disabled + & {
    color: var(--colors-text-inverted);
    background-color: var(--colors-background-disabled-selected);
    box-shadow: inset 0 -5px 0 var(--colors-background-disabled);
  }
`;

RadioGroupButtonLabel.Small = styled(RadioGroupButtonLabel)`
  font-size: 0.8em;
  padding: 5px 10px;
  font-weight: normal;

  ${Input}:checked + & {
    box-shadow: inset 0 -4px 0 var(--colors-primary-default);
  }

  ${Input}:checked:disabled + & {
    box-shadow: inset 0 -4px 0 var(--colors-background-disabled);
  }
`;

export default RadioGroupButtonLabel;
