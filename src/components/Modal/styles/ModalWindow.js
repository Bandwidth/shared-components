import styled from 'styled-components';
import get from 'extensions/themeGet';

// content flex is `0 1 auto`: it won't grow beyond the content size, but can shrink if the window is too small
// to show everything.

export default styled.div`
  background: ${get('colors.background.default')};
  width: auto;
  max-width: 70%;
  min-width: 20%;
  flex: 0 1 auto;
  min-height: 1em;
  max-height: 70vh;
  margin: 180px auto auto auto;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: ${get('shadows.long')};
  position: relative;
`;
