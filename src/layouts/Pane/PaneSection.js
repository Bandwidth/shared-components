import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';

const select = theme
  .register('PaneSection', ({ spacing, colors }) => ({
    titleMargin: `0 -${spacing.large} ${spacing.small} -${spacing.large}`,
    titleBackground: colors.grayMedium,
    titleColor: colors.black,
    titlePadding: `${spacing.extraSmall} ${spacing.large}`,
    titleFontSize: '0.9em',
    titleFontWeight: 600,
    titleLineHeight: '1.5em',
    titleTextTransform: 'uppercase',
    contentPadding: 0,
  }))
  .createSelector();

const Wrap = styled.section`

`;

const Content = styled.div`
  padding: ${select('contentPadding')};
  margin: 0;
`;

const Title = styled.h3`
  background: ${select('titleBackground')};
  color: ${select('titleColor')};
  display: block;
  padding: ${select('titlePadding')};
  margin: ${select('titleMargin')};
  font-size: ${select('titleFontSize')};
  font-weight: ${select('titleFontWeight')};
  line-height: ${select('titleLineHeight')};
  text-transform: ${select('titleTextTransform')};
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
