import { addDecorator } from '@storybook/react';
import React from 'react';
import BandwidthProvider from 'components/BandwidthProvider';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';

const history = createMemoryHistory('/');

addDecorator(getStory => <BandwidthProvider>{getStory()}</BandwidthProvider>)
addDecorator(getStory => <Router history={history}>{getStory()}</Router>)
