import styled from 'styled-components';
import themeGet from 'extensions/themeGet';

const CardSection = styled.div`
  padding: ${themeGet('spacing.medium')};
  ${CardSection}:not(:last-of-type) {
    border-bottom-color: ${themeGet('colors.border.medium')};
    border-bottom-width: ${themeGet('thicknesses.normal')};
    border-bottom-style: solid;
  }

  ${CardSection} > * {
    margin: 0;
  }
`;

/**
 * @component
 */
export default CardSection;
