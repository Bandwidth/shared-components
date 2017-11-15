import styled from 'styled-components';
import get from 'extensions/themeGet';




export default styled.div`
  width: 10px;
  margin: auto ${get('spacing.small')};
  height: ${get('thicknesses.normal')};
  background: ${get('colors.border.medium')};
`;
