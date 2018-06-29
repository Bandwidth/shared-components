import styled, { css } from 'styled-components';
import get from 'extensions/themeGet';
import StyledButton from './StyledToggleButton';

export default styled(StyledButton)`
  ${({ selected, hovered }) =>
    selected
      ? css`
          background-color: ${hovered
            ? 'var(--colors-negative-medium)'
            : 'var(--colors-positive-medium)'};
          border-color: ${hovered
            ? 'var(--colors-negative-medium)'
            : 'var(--colors-positive-medium)'};
          color: var(--colors-text-inverted);
        `
      : ''};
`;
