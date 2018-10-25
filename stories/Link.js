import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Link from 'components/Link';
import Horizontal from 'layouts/Horizontal';

storiesOf('Link', module)
  .add('basic', () => (
    <React.Fragment>
      <h2>Standard</h2>
      <Horizontal>
        <Link onClick={action('clicked')}>Text</Link>
        <Link.Negative onClick={action('clicked')}>Negative</Link.Negative>
        <Link.Positive onClick={action('clicked')}>Positive</Link.Positive>
        <Link.Dark onClick={action('clicked')}>Dark</Link.Dark>
        <Link.Inverted onClick={action('clicked')}>Inverted</Link.Inverted>
      </Horizontal>
    </React.Fragment>
  ))
  .add('external', () => (
    <React.Fragment>
      <h2>External</h2>
      <Horizontal>
        <Link external onClick={action('clicked')}>
          Text
        </Link>
        <Link.Negative external onClick={action('clicked')}>
          Negative
        </Link.Negative>
        <Link.Positive external onClick={action('clicked')}>
          Positive
        </Link.Positive>
        <Link.Dark external onClick={action('clicked')}>
          Dark
        </Link.Dark>
        <Link.Inverted external onClick={action('clicked')}>
          Inverted
        </Link.Inverted>
      </Horizontal>
    </React.Fragment>
  ))
  .add('with icons', () => (
    <React.Fragment>
      <h2>Icons</h2>
      <Horizontal>
        <Link icon="help" onClick={action('clicked')}>
          Text
        </Link>
        <Link.Negative icon="delete3" onClick={action('clicked')}>
          Negative
        </Link.Negative>
        <Link.Positive icon="unicorn" onClick={action('clicked')}>
          Positive
        </Link.Positive>
        <Link.Dark icon="file" onClick={action('clicked')}>
          Dark
        </Link.Dark>
        <Link.Inverted icon="cat" onClick={action('clicked')}>
          Inverted
        </Link.Inverted>
      </Horizontal>
    </React.Fragment>
  ));
