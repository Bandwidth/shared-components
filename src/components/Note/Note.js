import React from 'react';
import PropTypes from 'prop-types';
import NoteContainer from './styles/NoteContainer';
import NoteCorner from './styles/NoteCorner';
import { defaultProps } from 'recompose';

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
  Container: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  /**
   * Override the component that renders the corner
   */
  Corner: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

Note.defaultProps = {
  Container: NoteContainer,
  Corner: NoteCorner,
};

Note.Alternate = defaultProps({
  Container: NoteContainer.Alternate,
})(Note);

export default Note;
