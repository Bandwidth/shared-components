import styled from 'styled-components';
import get from 'extensions/themeGet';




export default styled.h3`
  display: block;
  margin: 0;
  background: ${get('colors.gray.mediumLight')};
  color: ${get('colors.text.default')};
  padding: 0.95em 1em 0.95em 1.5em;
  font-family: ${get('fonts.brand')};
  font-size: 0.9em;
  font-weight: 600;
  text-transform: uppercase;
`;
