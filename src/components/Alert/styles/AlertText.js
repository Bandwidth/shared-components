import styled from 'styled-components';
import { SIZE } from './AlertIcon';
import AlertBorder from './AlertBorder';

export default styled.p`
  padding: 0;
  display: inline-block;

  ${AlertBorder} > &, ${AlertBorder.Small} > & {
    margin: auto 0;
    flex: 1;
  }
`;
