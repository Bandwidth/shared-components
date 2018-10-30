import React from 'react';
import Container from './DragGroupSeparatorContainer';
import Content from './DragGroupSeparatorContent';

export default ({ children, ...rest}) => (
  <Container {...rest}>
    <Content>{children}</Content>
  </Container>
);
