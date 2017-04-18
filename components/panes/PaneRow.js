import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  & > * {
    flex: 1;
    border-right: ${({ theme }) => theme.pane.border};
  }

  & > *:last-child {
    border-right: none;
  }
`;