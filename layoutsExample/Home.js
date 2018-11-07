import React from 'react';
import { H1, P, Spacing, Code, Link } from '@bandwidth/shared-components';

export default () => (
  <Spacing>
    <H1>Bandwidth Layouts</H1>
    <P>
      You've found the documentation for Bandwidth's React layout library. Use
      the navigation above to get started.
    </P>
    <P>
      This documentation is built with the library itself, plus{' '}
      <Code>@bandwidth/shared-components</Code>. You can see the code{' '}
      <Link to="https://github.com/Bandwidth/layout" newTab>
        here
      </Link>
      .
    </P>
  </Spacing>
);
