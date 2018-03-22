import styled, { css } from 'styled-components';
import get from 'extensions/themeGet';

const BulkSelectItem = styled.button`
  padding: ${get('spacing.small')} ${get('spacing.medium')};
  background: ${get('colors.background.default')};
  border-color: ${get('colors.border.dark')};
  border-width: ${get('thicknesses.wide')};
  border-style: solid;
  border-radius: 3px;
  cursor: pointer;
  margin: ${get('spacing.small')} calc(${get('spacing.small')} / 2);
  display: flex;

  color: ${get('colors.primary.dark')};
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  user-select: none;
  transition: 0.2s ease;
  font-size: 14px;

  &:disabled {
    color: ${get('colors.text.disabled')};
    background-color: ${get('colors.background.disabled')};
    border-color: ${get('colors.border.disabled')};
    cursor: default;
  }

  ${({ selected }) =>
    selected
      ? css`
          background: ${get('colors.primary.dark')};
          color: ${get('colors.text.inverted')};
          border-color: ${get('colors.primary.dark')};
          &:hover:not(:disabled) {
            box-shadow: ${get('shadows.focusOutline')};
          }
          &:disabled {
            background-color: ${get('colors.background.disabledSelected')};
            border-color: ${get('colors.border.disabled')};
            color: ${get('colors.text.inverted')};
          }
        `
      : ''};
`;

BulkSelectItem.Colorful = styled(BulkSelectItem)`
  ${({ selected }) =>
    selected
      ? css`
          background-color: ${get('colors.positive.medium')};
          border-color: ${get('colors.positive.medium')};
          color: ${get('colors.text.inverted')};
          &:hover:not(:disabled) {
            background-color: ${get('colors.negative.medium')};
            border-color: ${get('colors.negative.medium')};
          }
        `
      : ''};
`;

export default BulkSelectItem;
