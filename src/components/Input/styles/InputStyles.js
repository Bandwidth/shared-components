import styled, { css } from 'styled-components';
import get from 'extensions/themeGet';

const InputStyles = styled.input`
  letter-spacing: 0.02em;
  line-height: 1.5;
  font-size: 14px;
  font-family: ${get('fonts.brand')};
  transition: all 0.2s ease;
  padding: ${get('spacing.medium')};
  border-width: ${get('thicknesses.normal')};
  border-style: solid;

  color: ${get('colors.text.default')};
  background: ${get('colors.background.default')};
  opacity: 1;
  border-color: ${get('colors.border.light')};

  outline: none;
  width: 100%;

  &:required {
    box-shadow: none;
  }

  &:focus {
    box-shadow: inset 0 -5px 0 ${get('colors.primary.light')};
    border-color: ${get('colors.border.medium')};
  }

  &:disabled {
    background: ${get('colors.background.disabled')};
    border-color: ${get('colors.border.medium')};
    opacity: 0.5;
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

InputStyles.Small = InputStyles.extend`
  font-size: 12px;
  padding: ${get('spacing.small')};
`;

export default InputStyles;
