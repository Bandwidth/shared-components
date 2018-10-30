import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../Context';
import * as styles from './styles';

/**
 * This is a floating layer above the rest of the layout which
 * is automatically resized to cover the visible area of the layout (it grows
 * as the user scrolls the page). It houses the secondary content and action
 * bar, which are rendered in using portals.
 */
const FixedLayer = ({ layerRef }) => (
  <Consumer>
    {({ clientTop, mainContentLocation }) => (
      <Overlay ref={layerRef} mainContentLocation={mainContentLocation} />
    )}
  </Consumer>
);

FixedLayer.propTypes = {
  /**
   * Provides a ref to the underlying div
   */
  layerRef: PropTypes.func,
  /**
   * The component used to render the overlay div
   */
  Overlay: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

FixedLayer.defaultProps = {
  Overlay: styles.Overlay,
};

FixedLayer.styles = styles;

export default FixedLayer;
