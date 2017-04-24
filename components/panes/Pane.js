import React from 'react';
import styled from 'styled-components';
import Header from '../Header';

const Layout = styled.article`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`;

class Pane extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
    children: React.PropTypes.node.isRequired,
  };

  static defaultProps = {
    title: null,
  };

  render() {
    const { title, children } = this.props;

    return (
      <Layout>
        {title ? <Header>{title}</Header> : null}
        {children}
      </Layout>
    );
  }
}

Pane.usage = `
# Pane

A section of display content with a title. Arranges children vertically.

\`\`\`
<Pane title="Hello">Content</Pane>
\`\`\`
`;

export default Pane;