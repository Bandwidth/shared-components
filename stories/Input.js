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
      <h2>Appear focused</h2>
      <Input type="text" appearFocused placeholder="Placeholder" />
      <h2>Without Cursor</h2>
      <Input type="text" hideCursor placeholder="Placeholder" />
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
  ));
