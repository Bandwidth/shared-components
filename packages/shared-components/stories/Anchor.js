import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Anchor from 'components/Anchor';
import Horizontal from 'layouts/Horizontal';

storiesOf('Anchor', module)
  .add('basic', () => (
    <React.Fragment>
      <h2>Standard</h2>
      <Horizontal>
        <Anchor onClick={action('clicked')}>Text</Anchor>
        <Anchor.Danger onClick={action('clicked')}>Danger</Anchor.Danger>
        <Anchor.Positive onClick={action('clicked')}>Positive</Anchor.Positive>
        <Anchor.Dark onClick={action('clicked')}>Dark</Anchor.Dark>
        <Anchor.Inverted onClick={action('clicked')}>Inverted</Anchor.Inverted>
      </Horizontal>
    </React.Fragment>
  ))
  .add('external', () => (
    <React.Fragment>
      <h2>External</h2>
      <Horizontal>
        <Anchor external onClick={action('clicked')}>
          Text
        </Anchor>
        <Anchor.Danger external onClick={action('clicked')}>
          Danger
        </Anchor.Danger>
        <Anchor.Positive external onClick={action('clicked')}>
          Positive
        </Anchor.Positive>
        <Anchor.Dark external onClick={action('clicked')}>
          Dark
        </Anchor.Dark>
        <Anchor.Inverted external onClick={action('clicked')}>
          Inverted
        </Anchor.Inverted>
      </Horizontal>
    </React.Fragment>
  ))
  .add('with icons', () => (
    <React.Fragment>
      <h2>Icons</h2>
      <Horizontal>
        <Anchor icon="help" onClick={action('clicked')}>
          Text
        </Anchor>
        <Anchor.Danger icon="delete3" onClick={action('clicked')}>
          Danger
        </Anchor.Danger>
        <Anchor.Positive icon="unicorn" onClick={action('clicked')}>
          Positive
        </Anchor.Positive>
        <Anchor.Dark icon="file" onClick={action('clicked')}>
          Dark
        </Anchor.Dark>
        <Anchor.Inverted icon="cat" onClick={action('clicked')}>
          Inverted
        </Anchor.Inverted>
      </Horizontal>
    </React.Fragment>
  ));
