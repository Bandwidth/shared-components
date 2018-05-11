import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { H1, H2, H3, H4, H5 } from 'components/H';
import Grid from 'layouts/Grid';

storiesOf('Header', module).add('types', () => (
  <Grid columns={1}>
    <H1>Header 1</H1>
    <H2>Header 2</H2>
    <H3>Header 3</H3>
    <H4>Header 4</H4>
    <H5>Header 5</H5>
  </Grid>
));
