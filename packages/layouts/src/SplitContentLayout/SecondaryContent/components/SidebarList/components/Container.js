import styled from 'styled-components';
import { themeGet } from '@bandwidth/shared-components';
import ItemContainer from './ItemContainer';

export default styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 0;
  padding: 0;

  & > * {
    border-top: ${themeGet('thicknesses.normal')} solid
      ${themeGet('colors.gray.border')};
    border-bottom: 0;
  }

  & > *:last-child {
    border-bottom: ${themeGet('thicknesses.normal')} solid
      ${themeGet('colors.gray.border')};
  }

  & > * > ${ItemContainer} {
    border-bottom: 0;
    border-top: 0;
  }
`;
