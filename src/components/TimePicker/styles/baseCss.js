import { css } from 'styled-components';

export default css`
  .bp3-timepicker-input-row {
    display: inline-block;
    color: var(--colors-text-default);
    border-width: var(--thicknesses-wide);
    border-color: var(--colors-border-medium);
    border-style: solid;
    background: var(--colors-background-default);
    line-height: 1.5;
    padding: calc(var(--spacing-extra-small) - 1px) var(--spacing-extra-small);
  }

  .bp3-timepicker-input {
    outline: 0;
    border: 0;
    background: transparent;
    text-align: center;
    font-family: var(--fonts-brand);
    font-size: 0.8em;
    width: 33px;
  }

  .bp3-timepicker-divider-text {
    display: inline-block;
    font-size: 1em;
  }
`;
