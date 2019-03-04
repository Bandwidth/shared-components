import * as React from 'react';
import styled from 'styled-components';
import userSpacing, { SpacingProps } from '../../extensions/userSpacing';

/**
 * `Breadcrumb` is a single item in a sequence of breadcrumbs, normally seen as navigation at the top of the page.
 * `Breadcrumb` is not so useful on its own, but if you combine a few of them within a `Breadcrumb.Group`, you get a nice layout.
 * Although `Breadcrumb` normally contains a link to another layer in the navigation, `Breadcrumb` can contain any manner of content:
 */
export const Breadcrumb = styled.div<SpacingProps>`
  display: inline-block;
  margin: ${userSpacing.text};
`;

Breadcrumb.defaultProps = {
  spacing: { bottom: 'md', top: 'md' },
};

export default Breadcrumb;
