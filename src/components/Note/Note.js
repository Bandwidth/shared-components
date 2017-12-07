import React from 'react';
import PropTypes from 'prop-types';
import NoteContainer from './styles/NoteContainer';
import NoteCorner from './styles/NoteCorner';

const Note = ({ children, Container, Corner }) => (
  <Container>
    {children}
    <Corner />
  </Container>
);

Note.propTypes = {
  /**
   * Contents of the note
   */
  children: PropTypes.node.isRequired,
  /**
   * Override the component that renders the outer container
   */
  Container: PropTypes.func,
  /**
   * Override the component that renders the corner
   */
  Corner: PropTypes.func,
};

Note.defaultProps = {
  Container: NoteContainer,
  Corner: NoteCorner,
};

export default Note;
