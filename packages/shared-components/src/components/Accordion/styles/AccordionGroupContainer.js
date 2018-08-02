import styled from 'styled-components';
import AccordionBorder from './AccordionBorder';

export default styled.div`
  & > ${AccordionBorder} + ${AccordionBorder} {
    border-top: none;
  }
`;
