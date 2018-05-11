import { configure } from '@storybook/react';
import './provider';

function loadStories() {
  require('../stories/index.js');
}

configure(loadStories, module);
