import styled from 'styled-components';

export default styled.article`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;

  & > *:last-child {
    flex: 1;
  }
`;
