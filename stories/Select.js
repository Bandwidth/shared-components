import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Select from 'components/Select';
import Grid from 'layouts/Grid';

const options = ['Apple', 'Banana', 'Lime', 'Lemon', 'Watermelon', 'Orange'];

storiesOf('Select', module).add('types', () => (
  <Grid columns={1} maxSize="400px">
    <h2>Standard</h2>
    <Select onChange={action('change')} options={options} />
    <h2>Disabled</h2>
    <Select disabled onChange={action('change')} options={options} />
    <h2>Searchable</h2>
    <Select onChange={action('change')} searchable options={options} />
    <h2>Required</h2>
    <Select onChange={action('change')} required options={options} />
    <h2>Loading</h2>
    <Select onChange={action('change')} loading options={options} />
    <h2>Inside an overflow-hidden div</h2>
    <div style={{ overflow: 'hidden' }}>
      <Select onChange={action('change')} options={options} />
    </div>
  </Grid>
));
