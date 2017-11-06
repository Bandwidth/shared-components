import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import tomorrow from 'react-syntax-highlighter/dist/styles/tomorrow-night';
import theme from '../../theme';
import { spreadStyles } from 'react-studs';

const select = theme
  .register('CodeBlock', ({ colors, fonts }) => ({
    fontFamily: fonts.monospace,
    fontSize: '1em',
    background: colors.background.inverted,
    color: colors.text.inverted,
    padding: '2em',
    margin: '0',
  }))
  .createSelector();

export const CodeWrapper = theme.connect(styled.pre`
  ${spreadStyles(select)}

  word-wrap: break-word;
  white-space: pre-wrap;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;

  & pre, & code {
    background: transparent !important;
    word-wrap: inherit;
    white-space: inherit;
  }
`);

class CodeBlock extends React.Component {
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

export default CodeBlock;
