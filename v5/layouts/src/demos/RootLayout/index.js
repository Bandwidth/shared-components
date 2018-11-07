import React from 'react';
import { H1, P, Code, Spacing } from '@bandwidth/shared-components';
import { Example } from '../common';

const examples = [
  `<RootLayout>
  <Route path="/" component={Navigation} />
  <Switch>
    <Route path="/page1" component={Page1} />
    <Route component={NotFound} />
  </Switch>
</RootLayout>
`,
];

export default () => (
  <React.Fragment>
    <Spacing>
      <H1>Root Layout</H1>
      <P>
        The <Code>&lt;RootLayout&gt;</Code> component provides a top-level
        layout for your app. It handles vertical page sizing, and adds a scroll
        shadow to the entire window view.
      </P>
      <P>Looking for a demo? That's this entire docs site!</P>
    </Spacing>
    {examples.map((code, idx) => <Example key={idx}>{code}</Example>)}
  </React.Fragment>
);
