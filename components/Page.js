import styled from 'styled-components';

const Page = styled.article.withConfig({ displayName: 'Page' })`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;

  & > *:last-child {
    flex: 1;
  }
`;

Page.usage = `
# Page

Page just sets up some defaults for layout and sizing on an average page. Items arrange via flexbox vertically. The page will be 100% of the width of its container.

\`\`\`
<Page>
  <ScrollBox>
    <!-- content -->
  </ScrollBox>
</Page>
\`\`\`
`;

export default Page;
