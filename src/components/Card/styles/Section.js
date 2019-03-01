import styled from 'styled-components';
import themeGet from 'extensions/themeGet';

const CardSection = styled.div`
  padding: ${themeGet('spacing.medium')};
  &:not(:last-of-type) {
    border-bottom-color: ${themeGet('colors.border.medium')};
    border-bottom-width: ${themeGet('thicknesses.normal')};
    border-bottom-style: solid;
  }

  & > * {
    margin: 0;
  }
`;

export default CardSection;
