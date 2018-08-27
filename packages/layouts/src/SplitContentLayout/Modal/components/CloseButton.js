import React from 'react';
import { Anchor } from '@bandwidth/shared-components';
import styled from 'styled-components';

const FloatingContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export default props => (
  <FloatingContainer>
    <Anchor icon="delete" {...props} />
  </FloatingContainer>
);
