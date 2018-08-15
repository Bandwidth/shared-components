import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from 'components/Button';
import Horizontal from 'layouts/Horizontal';

storiesOf('Button', module)
  .add('types', () => (
    <React.Fragment>
      <h2>Standard</h2>
      <Horizontal>
        <Button onClick={action('clicked')}>Text</Button>
        <Button.Small onClick={action('clicked')}>Small</Button.Small>
        <Button.Large onClick={action('clicked')}>Large</Button.Large>
        <Button.Danger onClick={action('clicked')}>Danger</Button.Danger>
        <Button.Secondary onClick={action('clicked')}>
          Secondary
        </Button.Secondary>
      </Horizontal>
      <h2>Disabled</h2>
      <Horizontal>
        <Button disabled onClick={action('clicked')}>
          Text
        </Button>
        <Button.Small disabled onClick={action('clicked')}>
          Small
        </Button.Small>
        <Button.Large disabled onClick={action('clicked')}>
          Large
        </Button.Large>
        <Button.Danger disabled onClick={action('clicked')}>
          Danger
        </Button.Danger>
        <Button.Secondary disabled onClick={action('clicked')}>
          Secondary
        </Button.Secondary>
      </Horizontal>
    </React.Fragment>
  ))
  .add('submit', () => (
    <React.Fragment>
      <h2>Standard</h2>
      <Button.Submit onClick={action('clicked')}>Submit</Button.Submit>
      <h2>Loading</h2>
      <Button.Submit loading onClick={action('clicked')}>
        Submit
      </Button.Submit>
    </React.Fragment>
  ));
