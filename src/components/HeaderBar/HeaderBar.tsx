import styled from 'styled-components';
import themeGet from 'extensions/themeGet';

export default styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: ${themeGet('thicknesses.normal')} solid
    ${themeGet('colors.gray.border')};
  padding-right: ${themeGet('spacing.medium')};
  padding-left: ${themeGet('spacing.medium')};
`;
