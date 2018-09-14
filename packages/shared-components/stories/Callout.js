import React from 'react';
import { storiesOf } from '@storybook/react';
import Callout from 'components/Callout';
import HelpCallout from 'components/HelpCallout';

storiesOf('Callout', module).add('types', () => (
  <React.Fragment>
    <h2>Standard</h2>
    <div style={{ width: '200px', border: '1px solid gray', padding: '12px' }}>
      <Callout content="hi there">Hover me</Callout>
    </div>
    <h2>Help</h2>
    <HelpCallout content="This is a helpful description">
      Default placement
    </HelpCallout>
    <HelpCallout placement="bottom" content="This is a helpful description">
      Bottom placement
    </HelpCallout>
    <div style={{ display: 'flex' }}>
      Only icon
      <HelpCallout content="This is a helpful description" />
    </div>
  </React.Fragment>
));
