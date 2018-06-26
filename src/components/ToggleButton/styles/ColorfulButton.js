import styled, { css } from 'styled-components';
import get from 'extensions/themeGet';
import StyledButton from './StyledToggleButton';

export default styled(StyledButton)`
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
