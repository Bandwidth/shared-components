import styled, { css } from 'styled-components';
import get from 'extensions/themeGet';

export default styled.div`
  padding: ${get('spacing.small')} ${get('spacing.medium')};
  background: ${get('colors.background.default')};
  color: ${get('colors.text.default')};
  border-color: ${get('colors.border.medium')};
  border-width: ${get('thicknesses.normal')};
  border-style: solid;
  border-radius: 3px;
  cursor: pointer;
  margin: ${get('spacing.small')} calc(${get('spacing.small')} / 2);
  display: flex;

  ${({ selected }) =>
    selected
      ? css`
          background: ${get('colors.primary.default')};
          color: ${get('colors.text.inverted')};
          border-color: ${get('colors.primary.default')};
        `
      : ''} &:hover {
    background: ${get('colors.primary.light')};
    color: ${get('colors.text.default')};
  }
`;
