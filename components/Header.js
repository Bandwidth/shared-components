import styled from 'styled-components';

const Header = styled.h1.withConfig({ displayName: 'Header' })`
  color: ${({ theme }) => theme.header.fg};
  font-family: ${({ theme }) => theme.header.fontFamily};
  font-weight: ${({ theme }) => theme.header.fontWeight};
  font-size: ${({ theme }) => theme.header.fontSize};
  margin: ${({ theme }) => theme.header.margin};
  line-height: ${({ theme }) => theme.header.lineHeight};
`;

Header.usage = `
# Header

A header is large text that usually sits above a section, page, or form.

\`\`\`
<Header>My Page</Header>
<ScrollBox>
  <!-- content -->
</ScrollBox>
\`\`\`
`;

export default Header;
