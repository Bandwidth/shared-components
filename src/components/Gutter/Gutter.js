import styled from 'styled-components';

const Gutter = styled.div.withConfig({ displayName: 'Gutter' })`
  background: ${({ theme }) => theme.colors.gutter};
`;

Gutter.usage = `
# Gutter

A simple container box which sets the background color. That's it!

\`\`\`
<Page>
  <Gutter>
    <!-- content -->
  </Gutter>
</Page>
\`\`\`
`;

export default Gutter;
