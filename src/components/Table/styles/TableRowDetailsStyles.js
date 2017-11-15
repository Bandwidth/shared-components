import styled from 'styled-components';
import get from 'extensions/themeGet';

export default styled.td`
  border-top: ${get('thicknesses.normal')} solid ${get('colors.shadow.light')};
  border-bottom: ${get('thicknesses.normal')} solid ${get('colors.shadow.light')};
  box-shadow: inset 5px 0 0 ${get('colors.shadow.light')};
`;
