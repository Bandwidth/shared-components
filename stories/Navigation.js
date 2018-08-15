import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Anchor from 'components/Anchor';
import Navigation from 'components/Navigation';

storiesOf('Navigation', module)
.add('standard', () => (
  <Navigation>
    <Anchor to="/" onClick={action('title')}>
      <Navigation.Title>
        Bandwidth App
      </Navigation.Title>
    </Anchor>
    <Navigation.ItemListStack>
      <Navigation.ItemList.Small>
        <Anchor newTab to="https://dev.bandwidth.com" onClick={action('docs for developers')}>
          <Navigation.Item>
            Docs for Developers
          </Navigation.Item>
        </Anchor>
        <Anchor to="/login" onClick={action('login')}>
          <Navigation.Item>
            Login
          </Navigation.Item>
        </Anchor>
      </Navigation.ItemList.Small>
      <Navigation.ItemList>
        <Anchor to="/pricing" onClick={action('pricing')}>
          <Navigation.Item>
            Pricing
          </Navigation.Item>
        </Anchor>
        <Anchor to="/trial" onClick={action('trial')}>
          <Navigation.Item>
            Try for Free
          </Navigation.Item>
        </Anchor>
      </Navigation.ItemList>
    </Navigation.ItemListStack>
  </Navigation>
)).add('dark', () => (
  <Navigation.Dark>
    <Anchor to="/" onClick={action('title')}>
      <Navigation.Title>
        Bandwidth App Dark
      </Navigation.Title>
    </Anchor>
    <Navigation.ItemListStack>
      <Navigation.ItemList.Small>
        <Anchor newTab to="https://dev.bandwidth.com" onClick={action('docs for developers')}>
          <Navigation.Item>
            Docs for Developers
          </Navigation.Item>
        </Anchor>
        <Anchor to="/login" onClick={action('login')}>
          <Navigation.Item>
            Login
          </Navigation.Item>
        </Anchor>
      </Navigation.ItemList.Small>
      <Navigation.ItemList>
        <Anchor to="/pricing" onClick={action('pricing')}>
          <Navigation.Item>
            Pricing
          </Navigation.Item>
        </Anchor>
        <Anchor to="/trial" onClick={action('trial')}>
          <Navigation.Item>
            Try for Free
          </Navigation.Item>
        </Anchor>
      </Navigation.ItemList>
    </Navigation.ItemListStack>
  </Navigation.Dark>
)).add('sub nav', () => (
  <Navigation.Sub>
      <Navigation.ItemList>
        <Anchor to="/pricing" onClick={action('pricing')}>
          <Navigation.Item>
            Pricing
          </Navigation.Item>
        </Anchor>
        <Anchor to="/trial" onClick={action('trial')}>
          <Navigation.Item>
            Try for Free
          </Navigation.Item>
        </Anchor>
      </Navigation.ItemList>
  </Navigation.Sub>
)).add('sub nav dark', () => (
  <Navigation.Sub.Dark>
      <Navigation.ItemList>
        <Anchor to="/pricing" onClick={action('pricing')}>
          <Navigation.Item>
            Pricing
          </Navigation.Item>
        </Anchor>
        <Anchor to="/trial" onClick={action('trial')}>
          <Navigation.Item>
            Try for Free
          </Navigation.Item>
        </Anchor>
      </Navigation.ItemList>
  </Navigation.Sub.Dark>
)).add('disabled link', () => (
  <Navigation>
    <Navigation.ItemList>
        <Navigation.Item disabled>
          Item without hover
        </Navigation.Item>
      <Anchor to="/trial" onClick={action('trial')}>
        <Navigation.Item>
          Try for Free
        </Navigation.Item>
      </Anchor>
    </Navigation.ItemList>
  </Navigation>
));
