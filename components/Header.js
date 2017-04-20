import styled from 'styled-components';

const Header = styled.h1`
  color: ${({ theme }) => theme.header.fg};
  font-family: ${({ theme }) => theme.header.fontFamily};
  font-weight: ${({ theme }) => theme.header.fontWeight};
  font-size: ${({ theme }) => theme.header.fontSize};
  margin: ${({ theme }) => theme.header.margin};
  line-height: ${({ theme }) => theme.header.lineHeight};
`;

export default Header;