import React from 'react';
import { SplitContentLayout } from '@bandwidth/shared-components';
import { Route, Switch } from 'react-router-dom';
import { ActionBarExpandingContent, Form, SidebarList } from '../widgets';
import Left from './Left';
import LeftComplex from './LeftComplex';
import Right from './Right';
import RightComplex from './RightComplex';
import Docs from './Docs';
import Full from './Full';

export default () => (
  <Switch>
    <Route exact path="/splitContent" component={Docs} />
    <Route exact path="/splitContent/right" component={Right} />
    <Route exact path="/splitContent/rightComplex" component={RightComplex} />
    <Route exact path="/splitContent/left" component={Left} />
    <Route exact path="/splitContent/leftComplex" component={LeftComplex} />
    <Route exact path="/splitContent/full" component={Full} />
  </Switch>
);
