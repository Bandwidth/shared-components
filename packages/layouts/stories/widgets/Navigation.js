import React from 'react';
import { Navigation, Anchor } from '@bandwidth/shared-components';

export default () => (
  <Navigation>
    <Anchor to="/">
      <Navigation.Title>Bandwidth App</Navigation.Title>
    </Anchor>
    <Navigation.ItemListStack>
      <Navigation.ItemList.Small>
        <Anchor newTab to="https://bandwidth.com">
          <Navigation.Item>Why Bandwidth</Navigation.Item>
        </Anchor>
        <Anchor newTab to="https://dev.bandwidth.com">
          <Navigation.Item>Docs for Developers</Navigation.Item>
        </Anchor>
        <Anchor to="/login">
          <Navigation.Item>Login</Navigation.Item>
        </Anchor>
      </Navigation.ItemList.Small>
      <Navigation.ItemList>
        <Anchor to="/services" exact>
          <Navigation.Item>Services</Navigation.Item>
        </Anchor>
        <Anchor to="/useCases">
          <Navigation.Item>Use Cases</Navigation.Item>
        </Anchor>
        <Anchor to="/pricing">
          <Navigation.Item>Pricing</Navigation.Item>
        </Anchor>
        <Anchor to="/trial">
          <Navigation.Item>Try for Free</Navigation.Item>
        </Anchor>
      </Navigation.ItemList>
    </Navigation.ItemListStack>
  </Navigation>
);
