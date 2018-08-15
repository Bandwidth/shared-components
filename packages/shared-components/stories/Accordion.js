import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Accordion from 'components/Accordion';
import Grid from 'layouts/Grid';

storiesOf('Accordion', module)
  .add('types', () => (
    <Grid columns={1} maxSize="600px">
      <Accordion label="Accordion">Contents</Accordion>
      <Accordion.Small label="Small">Contents</Accordion.Small>
      <Accordion startExpanded label="Start expanded">
        Contents
      </Accordion>
    </Grid>
  ))
  .add('disabled', () => (
    <Grid columns={1} maxSize="600px">
      <Accordion disabled label="Disabled">
        Contents
      </Accordion>
      <Accordion disabled startExpanded label="Disabled">
        Contents
      </Accordion>
      <Accordion.Small disabled label="Small disabled">
        Contents
      </Accordion.Small>
    </Grid>
  ));
