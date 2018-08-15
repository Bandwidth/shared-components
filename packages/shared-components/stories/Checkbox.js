import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Checkbox from 'components/Checkbox';
import Horizontal from 'layouts/Horizontal';

storiesOf('Checkbox', module).add('types', () => (
  <React.Fragment>
    <h2>Standard</h2>
    <Checkbox onChange={action('checkbox')} description="Foo" />
    <h2>Disabled</h2>
    <Horizontal>
      <Checkbox disabled description="Disabled" />
      <Checkbox disabled checked description="Disabled checked" />
    </Horizontal>
  </React.Fragment>
));
