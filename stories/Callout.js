import React from 'react';
import { storiesOf } from '@storybook/react';
import Callout from 'components/Callout';
import Icon from 'components/Icon';
import { Grid } from 'layouts';

storiesOf('Callout', module).add('types', () => (
  <Grid>
    <div>
      <Callout content="hi there" placement="bottom-start">
        Hover me
      </Callout>
    </div>
    <div>
      Only icon
      <Callout content="This is a helpful description" placement="bottom-start">
        <Icon name="help" />
      </Callout>
    </div>
    <div>
      Inside overflow: hidden container
      <div style={{ overflow: 'hidden' }}>
        <Callout content="you can still see me" placement="right">
          <Icon name="help" />
        </Callout>
      </div>
    </div>
    <div>
      Using this visible area as a boundary container: although the placement is
      "top", the callout should displace to the right to avoid overlapping the
      Storybook display area.
      <div>
        <Callout
          content="doesn't overlap the left edge"
          placement="top"
          boundary=".sb-show-main"
        >
          <Icon name="help" />
        </Callout>
      </div>
    </div>
  </Grid>
));
