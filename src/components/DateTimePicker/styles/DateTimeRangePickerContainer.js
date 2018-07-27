import styled from 'styled-components';

export default styled.div`
  display: flex;
  padding: var(--spacing-small) 0;
  justify-content: space-around;
  & > * {
    &:first-child {
      padding-right: var(--spacing-medium);
    }
    &:last-child {
      padding-left: var(--spacing-medium);
    }
  }
`;
