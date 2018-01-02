import React from 'react';
import { Route } from 'react-router-dom';
import { shallow, mount } from 'enzyme';

import { irisTheme } from '../../src';
import { NAMESPACE } from '../../src/theme';
import createBroadcast from 'styled-components/lib/utils/create-broadcast';

/**
 * The code below is refenced via https://github.com/styled-components/styled-components/issues/624
 * as a way to allow for a theme to passed to all children nodes when rendering components
 * for testing
 *
 * This is not the most elegant solution, but it is the only one that currently works with
 * enzyme
 */

const CHANNEL = '__styled-components__';

function nodeWithThemeProp(node, broadcast) {
  return React.cloneElement(node, { [CHANNEL]: broadcast.subscribe });
}

export function mountWithTheme(
  node,
  { context, childContextTypes } = {},
  theme = { [NAMESPACE]: irisTheme },
) {
  const broadcast = createBroadcast(theme);

  return mount(nodeWithThemeProp(node, broadcast), {
    context: Object.assign({}, context, { [CHANNEL]: broadcast.subscribe }),
    childContextTypes: Object.assign(
      {},
      { [CHANNEL]: createBroadcast(theme).publish },
      childContextTypes,
    ),
  });
}

export function shallowWithTheme(
  node,
  { context, childContextTypes } = {},
  theme = { [NAMESPACE]: irisTheme },
) {
  const broadcast = createBroadcast(theme);

  return shallow(nodeWithThemeProp(node, broadcast), {
    context: Object.assign({}, context, { [CHANNEL]: broadcast.subscribe }),
    childContextTypes: Object.assign(
      {},
      { [CHANNEL]: createBroadcast(theme).publish },
      childContextTypes,
    ),
  });
  d;
}

// Set to be used Globally in our testing
global.mountWithTheme = mountWithTheme;
global.shallowWithTheme = shallowWithTheme;
