import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Radio from 'components/Radio';
import Grid from 'layouts/Grid';

storiesOf('Radio', module).add('types', () => (
  <Grid columns={1} maxSize="600px">
    <h2>Standard</h2>
    <Radio onChange={action('onChange')} description="Unselected" />
    <Radio onChange={action('onChange')} checked description="Selected" />
    <Radio
      onChange={action('onChange')}
      disabled
      description="Disabled & unselected"
    />
    <Radio
      onChange={action('onChange')}
      disabled
      checked
      description="Disabled & selected"
    />
  </Grid>
));
