import styled, { css } from 'styled-components';
import get from 'extensions/themeGet';
import StyledButton from './StyledToggleButton';

export default styled(StyledButton)`
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
