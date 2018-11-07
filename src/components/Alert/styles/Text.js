import styled from 'styled-components';
import AlertContent from './Content';

export default styled.p`
  padding: 0;
  display: inline-block;

  ${AlertContent} > &, ${AlertContent.Small} > & {
    margin: auto 0;
  }
`;
