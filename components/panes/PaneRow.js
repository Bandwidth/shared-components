import styled from 'styled-components';

const PaneRow = styled.div.withConfig({ displayName: 'PaneRow' })`
  display: flex;
  flex-direction: row;
  width: 100%;

  & > * {
    flex: 1;
    border-right: ${({ theme }) => theme.pane.border};
  }

  & > *:last-child {
    border-right: none;
  }
`;

PaneRow.usage = `
# PaneRow

A composeable column. Lays out children horizontally. Applies a divider between children.

\`\`\`
<PaneRow>
  <Pane>Content</Pane>
  <Pane>Content</Pane>
</PaneRow>
\`\`\`
`;

export default PaneRow;