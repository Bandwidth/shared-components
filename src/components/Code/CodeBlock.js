import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import sharedComponent from '../../sharedComponent';
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

  & pre,
  & code {
    background: transparent !important;
    word-wrap: inherit;
    white-space: inherit;
  }
`;

export class CodeBlock extends React.Component {
  static propTypes = {
    /**
     * Code to render inside the code block.
     */
    children: PropTypes.node.isRequired,
    /**
     * Controls the syntax highlighting language.
     */
    language: PropTypes.string,
    /**
     * Adds a class name to the code block container element.
     */
    className: PropTypes.string,
    /**
     * Adds an id to the code block container element.
     */
    id: PropTypes.string,
  };

  static defaultProps = {
    language: 'javascript',
  };

  render() {
    const { id, className } = this.props;
    return (
      <CodeWrapper className={className} id={id}>
        <SyntaxHighlighter language={this.props.language} style={tomorrow}>
          {'' + this.props.children}
        </SyntaxHighlighter>
      </CodeWrapper>
    );
  }
}

export default sharedComponent({ Wrapper: CodeWrapper })(CodeBlock);
