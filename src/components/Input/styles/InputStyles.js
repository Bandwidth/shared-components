import styled, { css } from 'styled-components';
import get from 'extensions/themeGet';

const InputStyles = styled.input`
  letter-spacing: 0.02em;
  line-height: 1.5;
  font-size: 14px;
  font-family: var(--fonts-brand);
  transition: all 0.2s ease;
  padding: calc(var(--spacing-medium) - 1px) var(--spacing-medium);
  border-width: var(--thicknesses-wide);
  border-style: solid;

  color: var(--colors-text-default);
  background: var(--colors-background-default);
  opacity: 1;
  border-color: var(--colors-border-light);

  outline: none;
  width: 100%;

  &:focus {
    box-shadow: inset 0 -5px 0 var(--colors-primary-light);
    border-color: var(--colors-border-medium);
  }

  &:disabled {
    background: var(--colors-background-disabled);
    border-color: var(--colors-border-disabled);
    opacity: 1;
    color: var(--colors-text-disabled);
  }

  &::placeholder {
    opacity: 0.5;
  }

  ${props =>
    props.visited
      ? css`
          &:invalid {
            box-shadow: inset 0 -5px 0 var(--colors-negative-light);
            border-color: var(--colors-negative-border);
          }
        `
      : ''} ${props =>
    props.invalid || props.error
      ? `
    box-shadow: inset 0 -5px var(--colors-negative-light);
    border-color: var(--colors-negative-border);
    `
      : ''};
`;

InputStyles.Small = styled(InputStyles)`
  font-size: 12px;
  padding: var(--spacing-small);
`;

export default InputStyles;
