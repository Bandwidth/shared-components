import styled from 'styled-components';

export default styled.div`
  ${({ disablePointerEvents }) =>
    disablePointerEvents
      ? css`
          & > * {
            pointer-events: none;
          }
        `
      : null};
`;
