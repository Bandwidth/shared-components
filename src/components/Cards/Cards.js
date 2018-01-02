import styled from 'styled-components';
import themeGet from 'extensions/themeGet';
import Card from './Card';

const Cards = styled.div`
  display: flex;

  & > * {
    margin: ${themeGet('spacing.medium')};
    border-radius: 5px;
    box-shadow: ${themeGet('shadows.long')};
  }
`;

Cards.Connected = Cards.extend`
  & > * {
    margin: 0;
    border-radius: 0px;
    border-color: ${themeGet('colors.border.medium')};
    border-width: 0;
    border-right-width: ${themeGet('thicknesses.normal')};
    border-style: solid;
  }

  & > *:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-left-width: ${themeGet('thicknesses.normal')};
  }

  & > *:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

Cards.Card = Card;

export default Cards;
