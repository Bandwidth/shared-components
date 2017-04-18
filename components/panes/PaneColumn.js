import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > * {
    flex: 1 0 auto;
    border-bottom: ${({ theme }) => theme.pane.border};
  }

  & > *:last-child {
    border-bottom: none;
  }
`;