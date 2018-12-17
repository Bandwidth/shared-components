import themeGet from 'extensions/themeGet';
import H3 from 'components/H/H3';
import styled from 'styled-components';

const CardHeaderText = styled(H3)`
  color: ${themeGet('colors.text.inverted')};
`;

export default CardHeaderText;
