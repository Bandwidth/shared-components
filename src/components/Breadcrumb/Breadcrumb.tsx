import * as React from 'react';
import styled, { StyledComponentClass } from 'styled-components';
import userSpacing, { SpacingProps } from '../../extensions/userSpacing';

type StyledBreadcrumb = StyledComponentClass<
  React.ClassAttributes<HTMLDivElement> &
    React.HTMLAttributes<HTMLDivElement> &
    SpacingProps,
  any
>;

interface Breadcrumb extends StyledBreadcrumb {
  Group?: any;
}

const Breadcrumb: Breadcrumb = styled.div<SpacingProps>`
  display: inline-block;
  margin: ${userSpacing.text};
`;

Breadcrumb.defaultProps = {
  spacing: { bottom: 'md', top: 'md' },
};

export default Breadcrumb;
