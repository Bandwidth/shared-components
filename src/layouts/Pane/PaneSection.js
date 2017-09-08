import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import sharedComponent from '../../sharedComponent';

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
    /**
     * Optional title for the top of the pane section.
     */
    title: PropTypes.string,
    /**
     * Pane section contents.
     */
    children: PropTypes.node.isRequired,
    /**
     * Adds an id to the section.
     */
    id: PropTypes.string,
    /**
     * Adds a class name to the section.
     */
    className: PropTypes.string,
  };

  static defaultProps = {
    title: null,
    id: null,
    className: null,
  };

  render() {
    const { title, children, id, className } = this.props;
    return (
      <Wrap id={id} className={className}>
        {title ? <Title>{title}</Title> : null}
        <Content>{children}</Content>
      </Wrap>
    );
  }
}

export default sharedComponent(`
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
`, { Container: Wrap, Content, Title })(PaneSection);
