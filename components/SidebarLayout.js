import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  margin: 0;
  padding: 0;

  & > *:first-child {
    flex: 3;
  }

  & > *:last-child {
    flex: 7;
  }
`;
