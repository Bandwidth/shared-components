import styled from 'styled-components';

export default styled.h1`
  font-size: ${({ theme }) => theme.hook.fontSize};
  font-family: ${({ theme }) => theme.hook.fontFamily};
  font-weight: ${({ theme }) => theme.hook.fontWeight};
  color: ${({ theme }) => theme.hook.fg};
`;
