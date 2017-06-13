import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrap = styled.section`

`;

const Content = styled.div`
  padding: 0;
  margin: 0;
`;

const Title = styled.h3`
  background: #dedede;
  display: block;
  padding: ${({ theme }) => `${theme.padding.extraSmall} ${theme.padding.large}`};
  margin: 0;
  font-size: 0.9em;
  font-weight: 600;
  line-height: 1.5em;
  text-transform: uppercase;
`;

class PaneSection extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
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
