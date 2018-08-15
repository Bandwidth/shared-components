import styled from 'styled-components';
import themeGet from 'extensions/themeGet';

const CardWrapper = styled.div`
  height: auto;
  vertical-align: top;
  flex: 1;
  border-radius: 5px;
  margin: ${themeGet('spacing.medium')};
  box-shadow: ${themeGet('shadows.long')};
  border-color: ${themeGet('colors.border.medium')};
  border-width: 0 ${themeGet('thicknesses.normal')}
    ${themeGet('thicknesses.normal')} ${themeGet('thicknesses.normal')};
  border-style: solid;
  overflow: hidden;
`;

export default CardWrapper;
