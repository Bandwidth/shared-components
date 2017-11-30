import React from 'react';
import NoteBody from './styles/NoteBody';
import NoteCorner from './styles/NoteCorner';

export default props => (
  <NoteBody>
    {props.children}
    <NoteCorner />
  </NoteBody>
);
