import React from 'react';
import Container from './DragGroupTitleContainer';
import Content from './DragGroupTitleContent';
import Icon from '../../../Icon';

export default ({ children, expanded, onDelete }) => (
  <Container expanded={expanded}>
    <Content>{children}</Content>
    <Icon name="delete3" onClick={onDelete} />
  </Container>
);
