import styled from 'styled-components';

export default styled.div`
  display: flex;
  & > * + * {
    margin-left: var(--spacing-small);
  }
`;
