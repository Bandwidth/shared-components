import React from 'react';
import ReactDom from 'react-dom';

import './index.css';

import { BandwidthProvider } from '@bandwidth/shared-components';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Navigation from './Navigation';
import * as demos from './demos';

import { RootLayout } from '../../src';

ReactDom.render(
  <BandwidthProvider>
    <HashRouter>
      <RootLayout>
        <Route path="/" component={Navigation} />
        <Switch>
          <Route path="/" exact render={Home} />
          <Route path="/root" render={demos.RootLayout} />
          <Route path="/splitContent" component={demos.SplitContent} />
        </Switch>
      </RootLayout>
    </HashRouter>
  </BandwidthProvider>,
  document.getElementById('main'),
);
