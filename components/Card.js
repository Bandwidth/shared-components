import styled from 'styled-components';

export default styled.div`
  cursor: pointer;
  margin: ${({ theme }) => theme.card.margin};
  padding: ${({ theme }) => theme.card.padding};
  background: ${({ theme }) => theme.card.bg};
  color: ${({ theme, active }) => active ? theme.card.activeFG : theme.card.fg};
  border: ${({ theme }) => theme.card.border};
`;
