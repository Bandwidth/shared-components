import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CodeWrapper } from './Code';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
`;

const Content = styled.div`
  background: ${({ theme }) => theme.code.bg};
  padding: ${({ theme }) => theme.code.padding};
  color: ${({ theme }) => theme.code.fg};

  & > ${CodeWrapper} {
    padding: 0;
  }
`;

class CodeContainer extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    header: PropTypes.node,
  };

  static defaultProps = {
    header: null,
  };

  render() {
    return (
      <Container>
        {this.props.header}
        <Content>
          {this.props.children}
        </Content>
      </Container>
    );
  }
}

CodeContainer.usage = `
# CodeContainer

When you want to make a big block of code which contains multiple elements (including non-code labels), this component can wrap everything with a nice consistent background and foreground.

Also allows a header to be rendered above.

\`\`\`
<CodeContainer header={someHeaderNode}>
  <Code>some thing;</Code>
  <h3>a label for next thing</h3>
  <Code>some other thing;</Code>
</CodeContainer>
\`\`\`
`;

export default CodeContainer;