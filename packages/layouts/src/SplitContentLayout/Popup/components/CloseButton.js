import React from 'react';
import { Icon, themeGet } from '@bandwidth/shared-components';
import styled from 'styled-components';

const FloatingContainer = styled.div`
  position: absolute;
  top: ${themeGet('spacing.small')};
  right: ${themeGet('spacing.small')};

  & > ${Icon} {
    color: inherit;
  }

  &:hover,
  &:focus,
  &:active {
    color: ${themeGet('colors.primary.default')};
  }
`;

export default props => (
  <FloatingContainer>
    <Icon name="delete" {...props} />
  </FloatingContainer>
);
