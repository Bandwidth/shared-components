import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Select from 'components/Select';
import Grid from 'layouts/Grid';

const options = ['Apple', 'Banana', 'Lime', 'Lemon', 'Watermelon', 'Orange'];
const complexOptions = [
  {
    label: 'One',
    value: 1,
  },
  {
    label: 'Two',
    value: 2,
  },
  {
    label: 'Three',
    value: 3,
  },
];

storiesOf('Select', module).add('types', () => (
  <Grid columns={1} maxSize="400px">
    <h2>Standard</h2>
    <Select onChange={action('change')} options={options} />
    <h2>Disabled</h2>
    <Select disabled onChange={action('change')} options={options} />
    <h2>Searchable</h2>
    <Select.Searchable onChange={action('change')} options={options} />
    <h2>Required</h2>
    <Select onChange={action('change')} required options={options} />
    <h2>Loading</h2>
    <Select onChange={action('change')} loading options={options} />
    <h2>Complex options</h2>
    <Select
      onChange={option => action('change')(option ? option.value : option)}
      options={complexOptions}
      renderOption={option => option.label}
    />
    <h2>Inside an overflow-hidden div</h2>
    <div style={{ overflow: 'hidden' }}>
      <Select onChange={action('change')} options={options} />
    </div>
  </Grid>
));
