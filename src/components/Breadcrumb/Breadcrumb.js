import styled from 'styled-components';

const Breadcrumb = styled.div`
  float: left;
  
  &>* {
    float: left;
  }
  
  &:after {
   clear: both;
  }
`;

export default Breadcrumb;
