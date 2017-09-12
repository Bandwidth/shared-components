import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from '../../components/Header';
import Column from './PaneColumn';
import Content from './PaneContent';
import Layout from './PaneLayout';
import Row from './PaneRow';
import Section from './PaneSection';

const Container = styled.article`
  display: flex;
  flex-direction: column;
  flex: 1 1;
`;

const PaddedHeader = styled(Header)`
  padding: 0 30px 30px 30px;
`;

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
        {title ? <PaddedHeader>{title}</PaddedHeader> : null}
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
Pane.Content = Content;
Pane.Layout = Layout;
Pane.Row = Row;
Pane.Section = Section;
export default Pane;
