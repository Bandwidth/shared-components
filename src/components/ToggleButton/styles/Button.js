import styled, { css } from 'styled-components';
import get from 'extensions/themeGet';

const Button = styled.button`
  padding: ${get('spacing.small')} ${get('spacing.medium')};
  background: ${get('colors.background.default')};
  border-color: ${get('colors.border.dark')};
  border-width: ${get('thicknesses.wide')};
  border-style: solid;
  border-radius: 3px;
  cursor: pointer;

  color: ${get('colors.primary.dark')};
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  user-select: none;
  transition: 0.2s ease;
  font-size: 14px;
  font-family: ${get('fonts.brand')};
  height: 53px;
  outline: unset;

  &:disabled {
    color: ${get('colors.text.disabled')};
    background-color: ${get('colors.background.disabled')};
    border-color: ${get('colors.border.disabled')};
    cursor: default;
  }

  &:hover:not(:disabled) {
    box-shadow: ${get('shadows.focusOutline')};
  }

  ${({ selected }) =>
    selected &&
    css`
      background: ${get('colors.primary.dark')};
      color: ${get('colors.text.inverted')};
      border-color: ${get('colors.primary.dark')};
      &:disabled {
        background-color: ${get('colors.background.disabledSelected')};
        border-color: ${get('colors.border.disabled')};
        color: ${get('colors.text.inverted')};
      }
    `};
`;

Button.Colorful = styled(Button)`
  ${({ selected, hovered }) =>
    selected
      ? css`
          background-color: ${hovered
            ? get('colors.negative.medium')
            : get('colors.positive.medium')};
          border-color: ${hovered
            ? get('colors.negative.medium')
            : get('colors.positive.medium')};
          color: ${get('colors.text.inverted')};
        `
      : ''};
`;

Button.Small = styled(Button)`
  height: 30px;
  font-size: 0.8em;
  padding: 0 10px;
  min-width: 30px;
`;

export default Button;
