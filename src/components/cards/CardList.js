import styled from 'styled-components';

const CardList = styled.div.withConfig({ displayName: 'CardList' })`
  padding: ${({ theme }) => theme.padding.large};

  & > div {
    margin: 0;
  }
`;

CardList.usage = `
# CardList

Meant to contain a bunch of Cards. Defines some layout rules for them.

\`\`\`
<CardList>
  <Card>A</Card>
  <Card>B</Card>
</CardList>
\`\`\`
`;

export default CardList;
