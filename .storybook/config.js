import { configure } from '@storybook/react';
import './global.css';
import '../fonts/fonts.css';
import { addDecorator } from '@storybook/react';
import React from 'react';
import BandwidthProvider from 'components/BandwidthProvider';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';

const history = createMemoryHistory('/');

// pull in provider, see https://github.com/storybooks/storybook/issues/1844
addDecorator(getStory => <BandwidthProvider>{getStory()}</BandwidthProvider>);
addDecorator(getStory => <Router history={history}>{getStory()}</Router>);

function loadStories() {
  require('../stories/index.js');
}

configure(require.context('../stories', false, /index\.js/), module);
