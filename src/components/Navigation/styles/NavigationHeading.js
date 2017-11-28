import styled from 'styled-components';
import get from 'extensions/themeGet';

export default styled.h1`
  font-family: ${get('fonts.brand')};
  font-size: 22px;
  font-weight: 100;
  height: 30px;
  line-height: 30px;
  display: inline-block;
  color: ${get('colors.text.inverted')};
`;
