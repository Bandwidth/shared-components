import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Code = styled.pre`
  word-wrap: break-word;
  white-space: pre-wrap;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  font-family: ${({ theme }) => theme.code.fontFamily};
  font-size: ${({ theme }) => theme.code.fontSize};
  background: ${({ theme }) => theme.code.bg};
  color: ${({ theme }) => theme.code.fg};
  padding: ${({ theme }) => theme.code.padding};
  margin: 0;
`;

Code.usage = `
# Code

Applies styling to render code on the page. Supports multiline only (use InlineCode for single line).

\`\`\`
<Code>
Some complex
Code here
</Code>
\`\`\`
`;

export default Code;