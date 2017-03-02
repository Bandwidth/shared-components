import styled from 'styled-components';

export default styled.div`
  border: 0;
  padding: ${({ theme }) => theme.tab.padding};
  opacity: 1;
  transition: all 0.2s ease;
  position: relative;
  cursor: pointer;
  color: ${({ theme, active }) => active ? theme.tab.activeFG : theme.tab.fg};

  &::before {
    content: "";
    background: ${({ theme }) => theme.tab.accent};
    width: 104%;
    height: ${({ active }) => active ? '5px' : 0};
    display: block;
    position: absolute;
    bottom: ${({ theme }) => theme.tab.accentBarBottom};
    top: ${({ theme }) => theme.tab.accentBarTop};
    left: 50%;
    transform: translateX(-50%);
    transition: height 0.2s ease, opacity 0.2s ease;
  }

  &:hover::before {
    opacity: 0.5;
    height: 5px;
  }
`;
