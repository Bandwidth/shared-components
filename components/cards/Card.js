import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.card.fontSize};
  margin: ${({ theme }) => theme.card.margin};
  padding: ${({ theme }) => theme.card.padding};
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
`;

class Card extends React.Component {
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

Card.usage = `
# Card

Cards are simple data items. They're not meant to be interactive, just informative. Supports adding a little help text with the \`helpText\` property.

\`\`\`
<Card helpText="This is usually bar">Foo</Card>
\`\`\`
`;

export default Card;
