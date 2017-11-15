import styled from 'styled-components';
import AccordionBorder from './AccordionBorder';

export default styled.div`
  & > ${AccordionBorder}:not(:first-child) {
    border-top: none;
  }
`;
