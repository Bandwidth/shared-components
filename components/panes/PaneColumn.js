import styled from 'styled-components';

const PaneColumn = styled.div.withConfig({ displayName: 'PaneColumn' })`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > * {
    flex: 1 0 auto;
    border-bottom: ${({ theme }) => theme.pane.border};
  }

  & > *:last-child {
    border-bottom: none;
  }
`;

PaneColumn.usage = `
# PaneColumn

A composeable column. Lays out children vertically. Applies a divider between children.

\`\`\`
<PaneColumn>
  <Pane>Content</Pane>
  <Pane>Content</Pane>
</PaneColumn>
\`\`\`
`;

export default PaneColumn;