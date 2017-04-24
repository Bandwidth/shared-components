import styled from 'styled-components';

const TopNav = styled.header.withConfig({ displayName: 'TopNav' })`
  background: ${({ theme }) => theme.topNav.bg};
  color: ${({ theme }) => theme.topNav.fg};
  border-bottom: 1px solid ${({ theme }) => theme.shadow.color};
  padding: ${({ theme }) => theme.topNav.padding};
  display: flex;
  justify-content: space-between;
  min-height: ${({ theme }) => theme.topNav.minHeight};
  z-index: 1000;
`;

TopNav.usage = `
# TopNav

The header above a page which contains page title and navigation.

\`\`\`
<TopNav>
  <LogoHeader>Bandwidth</LogoHeader>
  <TabGroup>
    <!-- ... -->
  </TabGroup>
</TopNav>
\`\`\`
`;

export default TopNav;