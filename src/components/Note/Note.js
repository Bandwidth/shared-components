import React from 'react';
import PropTypes from 'prop-types';
import NoteBody from './styles/NoteBody';
import NoteCorner from './styles/NoteCorner';

const Note = ({ children, Body, Corner }) => (
  <Body>
    {children}
    <Corner />
  </Body>
);

Note.propTypes = {
  /**
   * Contents of the note
   */
  children: PropTypes.node.isRequired,
  /**
   * Override the component that renders the body container
   */
  Body: PropTypes.func,
  /**
   * Override the component that renders the corner
   */
  Corner: PropTypes.func,
};

Note.defaultProps = {
  Body: NoteBody,
  Corner: NoteCorner,
};

export default Note;
