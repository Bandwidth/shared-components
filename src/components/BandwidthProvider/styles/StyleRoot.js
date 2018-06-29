import styled, { css } from 'styled-components';
import get from 'extensions/themeGet';
import cssvars from 'theme/cssvars';

export default styled.div`
  font-family: var(--fonts-default);
  background: var(--colors-background-default);
  color: var(--colors-text-default);
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.28px;

  width: 100%;
  height: 100%;

  ${({ customTheme }) =>
    customTheme &&
    css`
      ${cssvars(customTheme)};
    `};
`;
