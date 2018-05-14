import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Toggle from 'components/Toggle';
import Grid from 'layouts/Grid';

storiesOf('Toggle', module).add('standard', () => (
  <Grid columns={1}>
    <h2>Standard</h2>
    <Toggle onChange={action('onChange')} description="Off" />
    <Toggle onChange={action('onChange')} description="On" value={true} />
    <h2>Disabled</h2>
    <Toggle onChange={action('onChange')} disabled description="Disabled Off" />
    <Toggle
      onChange={action('onChange')}
      disabled
      description="Disabled On"
      value={true}
    />
  </Grid>
));
