import styled from 'styled-components';

const PaneLayout = styled.div.withConfig({ displayName: 'PaneLayout' })`
  padding: 30px;
`;

PaneLayout.usage = `
# PaneLayout

A top-level space for panes. Simply provides the padding that is common to pane layouts.

\`\`\`
<PaneLayout>
  <PaneColumn>
    <PaneRow>
      <Pane />
      <Pane />
    </PaneRow>
    <PaneRow>
      <Pane />
      <Pane />
    </PaneRow>
  </PaneColumn>
</PaneLayout>
\`\`\`
`;

export default PaneLayout;