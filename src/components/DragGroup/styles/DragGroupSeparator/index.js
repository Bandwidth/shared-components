import React from 'react';
import Container from './DragGroupSeparatorContainer';
import Content from './DragGroupSeparatorContent';

export default ({ children, onClick }) => (
  <Container onClick={onClick}>
    <Content>{children}</Content>
  </Container>
);
