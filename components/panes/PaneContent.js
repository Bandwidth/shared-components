import styled from 'styled-components';

const PaneContent = styled.div`
  padding: ${({ theme }) => theme.pane.contentPadding};
`;

PaneContent.usage = `
# PaneContent

Wraps content inside a Pane or PaneSection with appropriate padding.

\`\`\`
<Pane>
  <PaneSection>
    <PaneContent>
      foo
    </PaneContent>
  </PaneSection>
</Pane>
\`\`\`
`;

export default PaneContent;