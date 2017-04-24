import React from 'react';
import styled from 'styled-components';

const Wrap = styled.section`

`;

const Content = styled.div`
  padding: 0;
  margin: 0;
`;

const Title = styled.h2`
  background: #dedede;
  display: block;
  padding: 5px 30px;
  margin: 0;
  font-size: 0.85em;
  font-weight: 800;
  text-transform: uppercase;
`;

class PaneSection extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
    children: React.PropTypes.node.isRequired,
  };

  static defaultProps = {
    title: null,
  };

  render() {
    return (
      <Wrap>
        {this.props.title ? <Title>{this.props.title}</Title> : null}
        <Content>{this.props.children}</Content>
      </Wrap>
    );
  }
}

PaneSection.usage = `
# PaneSection

Provides a nice delineated section of content within a Pane. Add a \`title\` to display a little divider with the title inside.

Does no layout on children. Add your own padding to children if needed.

\`\`\`
<Pane title="parent">
  <PaneSection title="foo">
    Content
  </PaneSection>
  <PaneSection title="bar">
    Content
  </PaneSection>
</Pane>
\`\`\`
`;

export default PaneSection;