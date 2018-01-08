import styled from 'styled-components';

const Breadcrumb = styled.div`
  float: left;

  & > * {
    float: left;
  }

  &:after {
    clear: both;
  }
`;

/**
 * @component
 */
export default Breadcrumb;
