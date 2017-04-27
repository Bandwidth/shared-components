import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import tomorrow from 'react-syntax-highlighter/dist/styles/tomorrow-night';

export const CodeWrapper = styled.pre`
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

  & pre, & code {
    background: transparent !important;
    word-wrap: inherit;
    white-space: inherit;
  }
`;

class Code extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    language: PropTypes.string,
  };

  static defaultProps = {
    language: 'javascript',
  };

  render() {
    return (
      <CodeWrapper>
        <SyntaxHighlighter language={this.props.language} style={tomorrow}>
          {'' + this.props.children}
        </SyntaxHighlighter>
      </CodeWrapper>
    );
  }
}

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