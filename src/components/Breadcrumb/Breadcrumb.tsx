import * as React from 'react';
import styled from 'styled-components';
import userSpacing, { SpacingProps } from '../../extensions/userSpacing';

export const Breadcrumb = styled.div<SpacingProps>`
  display: inline-block;
  margin: ${userSpacing.text};
`;

Breadcrumb.defaultProps = {
  spacing: { bottom: 'md', top: 'md' },
};

export default Breadcrumb;
