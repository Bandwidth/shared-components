import styled from 'styled-components';

export default styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100000;

  /* the div itself is not interactive */

  pointer-events: none;

  /* all children are, though */

  & > * {
    pointer-events: initial;
  }
`;
