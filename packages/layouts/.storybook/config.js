import { configure, addDecorator } from '@storybook/react';
import React from 'react';
import { BandwidthProvider } from '@bandwidth/shared-components';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import './global.css';

const history = createMemoryHistory();

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  addDecorator(getStory => <BandwidthProvider>{getStory()}</BandwidthProvider>);
  addDecorator(getStory => <Router history={history}>{getStory()}</Router>);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
