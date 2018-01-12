import themeGet from 'extensions/themeGet';
import H3 from 'components/H/H3';

const CardHeaderText = H3.extend`
  color: ${themeGet('colors.text.inverted')};
`;

export default CardHeaderText;
