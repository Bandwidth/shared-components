import styled, { css } from 'styled-components';

export default styled.div<{ disablePointerEvents: boolean }>`
  ${({ disablePointerEvents }) =>
    disablePointerEvents
      ? css`
          & > * {
            pointer-events: none;
          }
        `
      : null};
`;
