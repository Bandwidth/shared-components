import React from 'react';
import { SplitContentLayout } from '../../../../../src';
import { Route, Switch } from 'react-router-dom';
import { ActionBarExpandingContent, Form, SidebarList } from '../widgets';
import Left from './Left';
import LeftComplex from './LeftComplex';
import Right from './Right';
import RightComplex from './RightComplex';
import Docs from './Docs';

export default () => (
  <Switch>
    <Route exact path="/splitContent" component={Docs} />
    <Route exact path="/splitContent/right" component={Right} />
    <Route exact path="/splitContent/rightComplex" component={RightComplex} />
    <Route exact path="/splitContent/left" component={Left} />
    <Route exact path="/splitContent/leftComplex" component={LeftComplex} />
  </Switch>
);
