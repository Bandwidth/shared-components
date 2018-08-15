import React from 'react';
import { Consumer } from '../Context';
import { Overlay } from './components';

/**
 * This is a floating layer above the rest of the layout which
 * is automatically resized to cover the visible area of the layout (it grows
 * as the user scrolls the page). It houses the secondary content and action
 * bar, which are rendered in using portals.
 */
export default ({ layerRef }) => (
  <Consumer>
    {({ clientTop, mainContentLocation }) => (
      <Overlay innerRef={layerRef} mainContentLocation={mainContentLocation} />
    )}
  </Consumer>
);
