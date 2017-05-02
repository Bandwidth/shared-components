import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from '../Header';

const Layout = styled.article`
  display: flex;
  flex-direction: column;
  flex: 1 1;
`;

const PaddedHeader = styled(Header)`
  padding: 0 30px 30px 30px;
`;

class Pane extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    title: null,
  };

  render() {
    const { title, children } = this.props;

    return (
      <Layout>
        {title ? <PaddedHeader>{title}</PaddedHeader> : null}
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
