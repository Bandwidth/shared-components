import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Alert from 'components/Alert';
import Grid from 'layouts/Grid';

storiesOf('Alert', module)
  .add('types', () => (
    <Grid columns={1}>
      <h2>Standard</h2>
      <Alert type="info">Info</Alert>
      <Alert type="success">Success</Alert>
      <Alert type="error">Error</Alert>
      <h2>Small</h2>
      <Alert.Small type="info">Info</Alert.Small>
      <Alert.Small type="success">Success</Alert.Small>
      <Alert.Small type="error">Error</Alert.Small>
    </Grid>
  ))
  .add('textOnly', () => (
    <Grid columns={1}>
      <h2>Text Only</h2>
      <Alert textOnly type="info">
        Info
      </Alert>
      <Alert textOnly type="success">
        Success
      </Alert>
      <Alert textOnly type="error">
        Error
      </Alert>
    </Grid>
  ));
