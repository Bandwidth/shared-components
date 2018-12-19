import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from 'components/Input';
import Grid from 'layouts/Grid';

storiesOf('Input', module)
  .add('types', () => (
    <Grid columns={1} maxSize="400px">
      <h2>Standard</h2>
      <Input type="text" placeholder="Placeholder" />
      <h2>Small</h2>
      <Input.Small type="text" placeholder="Placeholder" />
      <h2>Password</h2>
      <Input type="password" placeholder="Placeholder" />
    </Grid>
  ))
  .add('skeleton', () => (
    <Grid columns={1} maxSize="400px">
      <h2>Standard</h2>
      <Input.Skeleton type="text" placeholder="Placeholder" />
      <h2>Small</h2>
      <Input.Small.Skeleton type="text" placeholder="Placeholder" />
    </Grid>
  ))
  .add('invalid', () => (
    <Grid columns={1} maxSize="400px">
      <h2>Standard</h2>
      <Input invalid type="text" placeholder="Placeholder" />
      <h2>Small</h2>
      <Input.Small invalid type="text" placeholder="Placeholder" />
      <h2>Password</h2>
      <Input invalid type="password" placeholder="Placeholder" />
    </Grid>
  ))
  .add('disabled', () => (
    <Grid columns={1} maxSize="400px">
      <h2>Standard</h2>
      <Input disabled type="text" placeholder="Placeholder" />
      <h2>Small</h2>
      <Input.Small disabled type="text" placeholder="Placeholder" />
      <h2>Password</h2>
      <Input disabled type="password" placeholder="Placeholder" />
    </Grid>
  ))
  .add('appear focused', () => (
    <Input
      type="text"
      style={{ width: 400 }}
      appearFocused
      placeholder="Placeholder"
    />
  ))
  .add('hide cursor', () => (
    <Input
      type="text"
      style={{ width: 400 }}
      hideCursor
      placeholder="Placeholder"
    />
  ));
