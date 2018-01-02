import styled from 'styled-components';

/**
 * @component
 */
export default styled.div`
  float: left;
  
  &>* {
    float: left;
  }
  
  &:after {
   clear: both;
  }
`;
