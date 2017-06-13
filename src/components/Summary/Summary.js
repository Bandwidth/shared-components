import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.card.fontSize};
  margin: 0;
  padding: ${({ theme }) => `${theme.padding.small} 0`};
  background: ${({ theme }) => theme.card.bg};
  color: ${({ theme, active }) => active ? theme.card.activeFG : theme.card.fg};
  border-bottom: ${({ theme }) => theme.card.border};

  &:last-child {
    border-bottom: none;
  }
`;

const Help = styled.span`
  font-family: ${({ theme }) => theme.card.helpFontFamily};
  font-style: italic;
  font-size: ${({ theme }) => theme.card.helpFontSize};
  font-weight: ${({ theme }) => theme.card.helpFontWeight};
  color: ${({ theme }) => theme.helpText.fg};
`;

class Summary extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    helpText: PropTypes.string,
  };

  static defaultProps = {
    helpText: null,
  };

  render() {
    const { children, helpText } = this.props;
    return (
      <Container>
        {children}
        <Help>{helpText}</Help>
      </Container>
    );
  }
}

Summary.usage = `
# Summary

Summaries are simple data items. They're not meant to be interactive, just informative. Supports adding a little help text with the \`helpText\` property.

\`\`\`
<Summary helpText="This is usually bar">Foo</Summary>
\`\`\`
`;

export default Summary;
