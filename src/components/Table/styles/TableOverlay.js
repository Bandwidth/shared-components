import styled from 'styled-components';
import get from 'extensions/themeGet';




export default styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  bottom: 0;
  right: 0;
  background: ${get('colors.shadow.white')};
  display: flex;

  & > div {
    margin: auto;
  }
`;
