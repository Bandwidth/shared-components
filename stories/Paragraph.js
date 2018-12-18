import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import lorem from 'lorem-ipsum';
import P from 'components/P';
import Grid from 'layouts/Grid';

storiesOf('Paragraph', module)
  .add('types', () => (
    <Grid columns={1} maxSize="600px">
      <h2>Standard</h2>
      <P>{lorem({ count: 10 })}</P>
    </Grid>
  ))
  .add('skeleton', () => (
    <Grid columns={1} maxSize="600px">
      <h2>Skeleton</h2>
      <P.Skeleton rows={4} />
    </Grid>
  ));
