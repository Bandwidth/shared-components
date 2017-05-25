import styled from 'styled-components';
import parseFlex from '../../extensions/parseFlex';

const FlexFields = styled.div`
  display: flex;
  flex-direction: row;

  ${({ flex }) => parseFlex(flex)}
`;

FlexFields.usage = `
# FlexFields

Yet another way to layout fields on a row. This one tries to expose more powerful usage of flexbox via simpler implementation.

There's obviously too many ways to layout fields in rows. Perhaps these can be consolidated in some way, or we should choose one that works best for all use cases. This one is really good at supporting cases where you want fields pushed to different sides of the row with space between.

\`\`\`
<FlexFields flex="00 1 0 3">
  <One />
  <Two />
  <Three />
  <Four />
  <Five />
</FlexFields>
\`\`\`

FlexFields is nestable. So if you want half the row to be one field, and then the other half broken up among 3, you'd do something like

\`\`\`
<FlexFields flex="11">
  <One />
  <FlexFields flex="111">
    <Two />
    <Three />
    <Four />
  </FlexFields>
</FlexFields>
\`\`\`
`;

export default FlexFields;
