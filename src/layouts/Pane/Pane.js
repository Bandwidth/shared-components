import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from '../../components/Heading';
import Column from './PaneColumn';
import Row from './PaneRow';
import Section from './PaneSection';
import theme from '../../theme';

const select = theme
  .register('Pane', ({ spacing }) => ({
    headerMargin: `${spacing.medium} 0`,
    padding: `0 ${spacing.large}`,
    sectionSpacing: spacing.large,
  }))
  .createSelector();

const Container = theme.connect(styled.article`
  display: flex;
  flex-direction: column;
  flex: 1 1;
  padding: ${select('padding')};

  & > h1, & > h2, & > h3, & > h4, & > h5 {
    margin: ${select('headerMargin')};
  }

  & > section {
    margin: ${select('sectionSpacing')} 0 0 0;

    &:first-of-type {
      margin-top: 0;
    }
    &:last-of-type {
      margin-bottom: ${select('sectionSpacing')};
    }
  }
`);

class Pane extends React.Component {
  static propTypes = {
    /**
     * Optional title for the top of the pane.
     */
    title: PropTypes.string,
    /**
     * Contents of the pane.
     */
    children: PropTypes.node.isRequired,
    /**
     * Adds an id to the pane.
     */
    id: PropTypes.string,
    /**
     * Adds a class name to the pane.
     */
    className: PropTypes.string,
  };

  static defaultProps = {
    title: null,
    className: null,
    id: null,
  };

  render() {
    const { title, children, className, id } = this.props;

    return (
      <Container className={className} id={id}>
        {title ? <Heading>{title}</Heading> : null}
        {children}
      </Container>
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

Pane.Column = Column;
Pane.Row = Row;
Pane.Section = Section;
export default Pane;
