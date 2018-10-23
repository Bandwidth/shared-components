import React from 'react';
import { storiesOf } from '@storybook/react';
import Callout from 'components/Callout';
import Icon from 'components/Icon';

storiesOf('Callout', module).add('types', () => (
  <React.Fragment>
    <div>
      <Callout content="hi there" placement="bottom-start">Hover me</Callout>
    </div>
    <div>
      Only icon
      <Callout content="This is a helpful description" placement="bottom-start">
        <Icon name="help" />
      </Callout>
    </div>
  </React.Fragment>
));
