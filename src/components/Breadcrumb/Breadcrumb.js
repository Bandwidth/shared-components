import styled from 'styled-components';

export default styled.div`
  float: left;
  
  &>* {
    float: left;
  }
  
  &:after {
   clear: both;
  }
`;
