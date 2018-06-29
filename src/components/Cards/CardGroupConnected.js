import styled from 'styled-components';
import Card from './Card';
import themeGet from 'extensions/themeGet';

const CardGroupConnected = styled.div`
  display: flex;
  border-width: 0 var(--thicknesses-normal) var(--thicknesses-normal)
    var(--thicknesses-normal);
  border-color: var(--colors-border-medium);
  border-style: solid;
  border-radius: 5px;
  box-shadow: var(--shadows-long);

  & > * {
    margin: 0;
    box-shadow: none;
    border: none;
    border-radius: 0;
  }

  & > ${Card}:first-of-type {
    border-radius: 0;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  & > ${Card}:last-of-type {
    border-radius: 0;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  & > ${Card}:not(:first-of-type) {
    border-left: var(--thicknesses-normal) solid var(--colors-border-medium);
  }
`;

export default CardGroupConnected;
