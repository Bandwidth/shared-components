import React from 'react';
import { CodeBlock } from '@bandwidth/shared-components';
import SyntaxHighlighter, {
  registerLanguage,
} from 'react-syntax-highlighter/prism-light';
import jsx from 'react-syntax-highlighter/languages/prism/jsx';
import { tomorrow } from 'react-syntax-highlighter/styles/prism';

registerLanguage('jsx', jsx);

export default props => (
  <CodeBlock>
    <SyntaxHighlighter language="jsx" style={tomorrow}>
      {props.children}
    </SyntaxHighlighter>
  </CodeBlock>
);
