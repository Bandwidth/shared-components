import React from 'react';
import { Navigation, Link } from '@bandwidth/shared-components';
import { Route, Switch, NavLink } from 'react-router-dom';

const CustomLink = ({ children, to, newTab, appearFocused, icon, ...rest }) => (
  <NavLink to={to} activeClassName="active" {...rest}>
    {children}
  </NavLink>
);

// NOTE: use Link.Wrap, which doesn't apply any styles!
export const NavWrapLink = props => <Link.Wrap as={CustomLink} {...props} />;

const SubNav = () => (
  <Switch>
    <Route path="/splitContent">
      <Navigation.Sub>
        <Navigation.ItemList>
          <NavWrapLink to="/splitContent">
            <Navigation.Item>Docs</Navigation.Item>
          </NavWrapLink>
          <NavWrapLink to="/splitContent/right">
            <Navigation.Item>Right</Navigation.Item>
          </NavWrapLink>
          <NavWrapLink to="/splitContent/rightComplex">
            <Navigation.Item>Right Complex</Navigation.Item>
          </NavWrapLink>
          <NavWrapLink to="/splitContent/left">
            <Navigation.Item>Left</Navigation.Item>
          </NavWrapLink>
          <NavWrapLink to="/splitContent/leftComplex">
            <Navigation.Item>Left Complex</Navigation.Item>
          </NavWrapLink>
          <NavWrapLink to="/splitContent/full">
            <Navigation.Item>Full</Navigation.Item>
          </NavWrapLink>
        </Navigation.ItemList>
      </Navigation.Sub>
    </Route>
  </Switch>
);

export default () => (
  <div>
    <Navigation>
      <NavWrapLink to="/">
        <Navigation.Title>Bandwidth Layouts</Navigation.Title>
      </NavWrapLink>
      <Navigation.ItemListStack>
        <Navigation.ItemList.Small>
          <NavWrapLink newTab to="https://github.com/bandwidth/layout">
            <Navigation.Item>Github</Navigation.Item>
          </NavWrapLink>
          <NavWrapLink newTab to="http://dev.bandwidth.com/shared-components">
            <Navigation.Item>Shared Components Docs</Navigation.Item>
          </NavWrapLink>
        </Navigation.ItemList.Small>
        <Navigation.ItemList>
          <NavWrapLink to="/root">
            <Navigation.Item>Root</Navigation.Item>
          </NavWrapLink>
          <NavWrapLink to="/splitContent" exact>
            <Navigation.Item>Split-Content</Navigation.Item>
          </NavWrapLink>
        </Navigation.ItemList>
      </Navigation.ItemListStack>
    </Navigation>
    <SubNav />
  </div>
);
