import styled from 'styled-components';
import get from 'extensions/themeGet';

export default styled.div`
  border-width: ${get('thicknesses.normal')};
  border-color: ${get('colors.gray.border')};
  border-style: solid;
  background: ${get('colors.gray.light')};
  padding: ${get('spacing.medium')};
  overflow-y: auto;
`;
