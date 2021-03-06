import styled from 'styled-components';
import CardWrapper from './Wrapper';
import themeGet from 'extensions/themeGet';

const CardGroupConnected = styled.div`
  display: flex;
  border-width: 0 ${themeGet('thicknesses.normal')}
    ${themeGet('thicknesses.normal')} ${themeGet('thicknesses.normal')};
  border-color: ${themeGet('colors.border.medium')};
  border-style: solid;
  border-radius: 5px;
  box-shadow: ${themeGet('shadows.long')};

  & > * {
    margin: 0;
    box-shadow: none;
    border: none;
    border-radius: 0;
  }

  & > ${CardWrapper}:first-of-type {
    border-radius: 0;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  & > ${CardWrapper}:last-of-type {
    border-radius: 0;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  & > ${CardWrapper} + ${CardWrapper} {
    border-left: ${themeGet('thicknesses.normal')} solid
      ${themeGet('colors.border.medium')};
  }
`;

export default CardGroupConnected;
