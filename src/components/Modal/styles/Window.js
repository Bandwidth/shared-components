import styled from 'styled-components';
import get from 'extensions/themeGet';

// content flex is `0 1 auto`: it won't grow beyond the content size, but can shrink if the window is too small
// to show everything.

// @media adjust for when browser windows get to small for normal modals

export default styled.div`
@media only screen and (max-height: 500px) {
  min-height: 200px;
  min-width: 200px;
  margin-top: 5vh;
}

  background: ${get('colors.background.default')};
  width: auto;
  max-width: 70%;
  min-width: 20%;
  flex: 0 1 auto;
  min-height: 1em;
  max-height: 70vh;
  margin: 150px auto;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: ${get('shadows.long')};
  position: relative;
`;
