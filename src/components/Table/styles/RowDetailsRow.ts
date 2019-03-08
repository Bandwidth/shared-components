import styled from 'styled-components';
import get from 'extensions/themeGet';

export default styled.tr`
  display: table-row;
  text-align: left;

  &:nth-child(odd) {
    background: transparent;
  }
  &:nth-child(even) {
    background: ${get('colors.shadow.extraLight')};
  }
`;
