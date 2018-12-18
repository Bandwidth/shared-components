import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import lorem from 'lorem-ipsum';
import P from 'components/P';
import Grid from 'layouts/Grid';
import SkeletonSimulator from './widgets/SkeletonSimulator';

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
  ))
  .add('skeleton loading', () => (
    <Grid columns={1} maxSize="600px">
      <h2>Skeleton Loading</h2>
      <SkeletonSimulator
        render={() => <P>{lorem({ count: 10 })}</P>}
        renderLoading={() => <P.Skeleton rows={4} />}
      />
    </Grid>
  ));
