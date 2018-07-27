import styled, { css } from 'styled-components';

export default styled.div`
  .TimeInput-input {
    letter-spacing: 0.02em;
    line-height: 1.5;
    font-size: 14px;
    font-family: var(--fonts-brand);
    transition: all 0.2s ease;
    padding: calc(var(--spacing-extra-small) - 1px) var(--spacing-extra-small);
    border-width: var(--thicknesses-wide);
    border-style: solid;

    color: var(--colors-text-default);
    background: var(--colors-background-default);
    opacity: 1;
    border-color: var(--colors-border-light);

    width: 4em;
    text-align: center;

    outline: none;

    &:focus {
      box-shadow: inset 0 -5px 0 var(--colors-primary-light);
      border-color: var(--colors-border-medium);
    }

    ${({ disabled }) =>
      disabled &&
      css`
        pointer-events: none;
        background: var(--colors-background-disabled);
        border-color: var(--colors-border-disabled);
        opacity: 1;
        color: var(--colors-text-disabled);
      `};
  }
`;
