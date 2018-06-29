import styled, { css } from 'styled-components';
import get from 'extensions/themeGet';

export default styled.button`
  padding: var(--spacing-small) var(--spacing-medium);
  background: var(--colors-background-default);
  border-color: var(--colors-border-dark);
  border-width: var(--thicknesses-wide);
  border-style: solid;
  border-radius: 3px;
  cursor: pointer;

  color: var(--colors-primary-dark);
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  user-select: none;
  transition: 0.2s ease;
  font-size: 14px;
  font-family: var(--fonts-brand);
  height: 53px;
  outline: unset;

  &:disabled {
    color: var(--colors-text-disabled);
    background-color: var(--colors-background-disabled);
    border-color: var(--colors-border-disabled);
    cursor: default;
  }

  &:hover:not(:disabled) {
    box-shadow: var(--shadows-focus-outline);
  }

  ${({ selected }) =>
    selected &&
    css`
      background: var(--colors-primary-dark);
      color: var(--colors-text-inverted);
      border-color: var(--colors-primary-dark);
      &:disabled {
        background-color: var(--colors-background-disabled-selected);
        border-color: var(--colors-border-disabled);
        color: var(--colors-text-inverted);
      }
    `};
`;
