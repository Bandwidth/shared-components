import styled from 'styled-components';

import Block from './CodeBlock';
import Container from './CodeContainer';

const Code = styled.pre.withConfig({ displayName: 'Code' })`
  font-family: ${({ theme }) => theme.inlineCode.fontFamily};
  fontSize: ${({ theme }) => theme.inlineCode.fontSize};
  background: ${({ theme }) => theme.inlineCode.bg};
  color: ${({ theme }) => theme.inlineCode.fg};
  border: ${({ theme }) => theme.inlineCode.border};
  padding: ${({ theme }) => theme.inlineCode.padding}
  borderRadius: ${({ theme }) => theme.inlineCode.borderRadius};
  margin: 0;
`;

Code.usage = `
# Code

Applies styling to render code inside a larger paragraph.

\`\`\`
Lorem ipsum <Code>code</Code> dolor
\`\`\`
`;

Code.Block = Block;
Code.Container = Container;
export default Code;
