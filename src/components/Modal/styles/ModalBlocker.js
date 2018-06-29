import styled from 'styled-components';
import get from 'extensions/themeGet';

export default styled.div`
  background: var(--colors-shadow-default);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  z-index: 100000;
`;
