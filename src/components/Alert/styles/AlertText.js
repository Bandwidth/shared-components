import styled from 'styled-components';
import { SIZE } from './AlertIcon';
import AlertBorder from './AlertBorder';

export default styled.p`
  padding: 0;
  display: inline-block;

  ${AlertBorder} > & {
    margin: auto 0 0 0;
    flex: 1;
  }
`;
