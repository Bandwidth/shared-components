import styled from 'styled-components';

const InlineCode = styled.pre`
  font-family: ${({ theme }) => theme.inlineCode.fontFamily};
  fontSize: ${({ theme }) => theme.inlineCode.fontSize};
  background: ${({ theme }) => theme.inlineCode.bg};
  color: ${({ theme }) => theme.inlineCode.fg};
  border: ${({ theme }) => theme.inlineCode.border};
  padding: ${({ theme }) => theme.inlineCode.padding}
  borderRadius: ${({ theme }) => theme.inlineCode.borderRadius};
  margin: 0;
`;

InlineCode.usage = `
# InlineCode

Applies styling to render code inside a larger paragraph.

\`\`\`
Lorem ipsum <InlineCode>code</InlineCode> dolor
\`\`\`
`;

export default InlineCode;