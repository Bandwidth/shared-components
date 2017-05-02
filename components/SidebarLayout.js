import styled from 'styled-components';

const SidebarLayout = styled.div.withConfig({ displayName: 'SidebarLayout' })`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  margin: 0;
  padding: 0;

  & > *:first-child {
    flex: 3;
  }

  & > *:last-child {
    flex: 6;
    background: ${({ theme }) => theme.colors.gutter};
  }
`;

SidebarLayout.usage = `
# SidebarLayout

Does some simple stuff with flexbox to layout two columns. Assumes that it only has two children. We could extend this with media queries at some point to make it more useful.

\`\`\`
<SidebarLayout>
  <ASidebar/>
  <SomeContent/>
</SidebarLayout>
\`\`\`
`;

export default SidebarLayout;
