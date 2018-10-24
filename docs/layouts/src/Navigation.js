import React from 'react';
import { Navigation, Anchor } from '@bandwidth/shared-components';
import { Route, Switch } from 'react-router-dom';

const SubNav = () => (
  <Switch>
    <Route path="/splitContent">
      <Navigation.Sub>
        <Navigation.ItemList>
          <Anchor exact to="/splitContent">
            <Navigation.Item>Docs</Navigation.Item>
          </Anchor>
          <Anchor to="/splitContent/right">
            <Navigation.Item>Right</Navigation.Item>
          </Anchor>
          <Anchor to="/splitContent/rightComplex">
            <Navigation.Item>Right Complex</Navigation.Item>
          </Anchor>
          <Anchor to="/splitContent/left">
            <Navigation.Item>Left</Navigation.Item>
          </Anchor>
          <Anchor to="/splitContent/leftComplex">
            <Navigation.Item>Left Complex</Navigation.Item>
          </Anchor>
        </Navigation.ItemList>
      </Navigation.Sub>
    </Route>
  </Switch>
);

export default () => (
  <div>
    <Navigation>
      <Anchor to="/">
        <Navigation.Title>Bandwidth Layouts</Navigation.Title>
      </Anchor>
      <Navigation.ItemListStack>
        <Navigation.ItemList.Small>
          <Anchor newTab to="https://github.com/bandwidth/layout">
            <Navigation.Item>Github</Navigation.Item>
          </Anchor>
          <Anchor newTab to="http://dev.bandwidth.com/shared-components">
            <Navigation.Item>Shared Components Docs</Navigation.Item>
          </Anchor>
        </Navigation.ItemList.Small>
        <Navigation.ItemList>
          <Anchor exact to="/root">
            <Navigation.Item>Root</Navigation.Item>
          </Anchor>
          <Anchor to="/splitContent" exact>
            <Navigation.Item>Split-Content</Navigation.Item>
          </Anchor>
        </Navigation.ItemList>
      </Navigation.ItemListStack>
    </Navigation>
    <SubNav />
  </div>
);
