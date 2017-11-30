import styled from 'styled-components';

const Breadcrumbs = styled.div`
  &>*:not(:last-child)::after {
    content: "\00a0 \00a0 ›\00a0 \00a0"
  }
`;

export default Breadcrumbs;
