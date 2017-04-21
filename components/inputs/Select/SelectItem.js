import styled from 'styled-components';

export default styled.option`
  padding: ${({ theme }) => theme.selectItem.padding};
  border-bottom: ${({ theme }) => theme.selectItem.border};
  color: ${({ theme, active }) => active ? theme.selectItem.activeFG : theme.selectItem.fg};
  background: ${({ theme }) => theme.selectItem.bg};
  list-style-type: none;
  display: block;
  cursor: pointer;
`;
