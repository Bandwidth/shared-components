import styled, { css } from 'styled-components';
import get from 'extensions/themeGet';

const InputStyles = styled.input`
  letter-spacing: 0.02em;
  line-height: 1.5;
  font-size: 14px;
  font-family: ${get('fonts.brand')};
  transition: all 0.2s ease;
  padding: calc(${get('spacing.medium')} - 1px) ${get('spacing.medium')};
  border-width: ${get('thicknesses.wide')};
  border-style: solid;
  text-align: left;

  color: ${({ hideCursor }) =>
    hideCursor ? 'transparent' : 'var(--colors-text-default)'};
  text-shadow: ${({ hideCursor }) =>
    hideCursor ? '0 0 0 var(--colors-text-default)' : 'none'};
  background: ${get('colors.background.default')};
  opacity: 1;
  border-color: ${props =>
    props.appearFocused
      ? get('colors.border.medium')(props)
      : get('colors.border.light')(props)};
  box-shadow: ${props =>
    props.appearFocused
      ? `inset 0 -5px 0 ${get('colors.primary.light')(props)}`
      : 'none'};

  outline: none;
  width: 100%;

  &:focus {
    box-shadow: inset 0 -5px 0 ${get('colors.primary.light')};
    border-color: ${get('colors.border.medium')};
  }

  &:disabled {
    background: ${get('colors.background.disabled')};
    border-color: ${get('colors.border.disabled')};
    opacity: 1;
    color: ${get('colors.text.disabled')};
  }

  &::placeholder {
    opacity: 0.5;
  }

  ${props =>
    props.visited
      ? css`
          &:invalid {
            box-shadow: inset 0 -5px 0 ${get('colors.negative.light')(props)};
            border-color: ${get('colors.negative.border')(props)};
          }
        `
      : ''} ${props =>
    props.invalid || props.error
      ? `
    box-shadow: inset 0 -5px ${get('colors.negative.light')(props)};
    border-color: ${get('colors.negative.border')(props)};
    `
      : ''};
`;

InputStyles.Small = styled(InputStyles)`
  font-size: 12px;
  padding: calc(var(--spacing-extra-small) - 1px) var(--spacing-extra-small);
`;

export default InputStyles;
