import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../Context';
import * as styles from './styles';

interface FixedLayerProps {
  /**
   * Provides a ref to the underlying div
   */
  layerRef: any;
  /**
   * The component used to render the overlay div
   */
  Overlay?: any;
}

/**
 * This is a floating layer above the rest of the layout which
 * is automatically resized to cover the visible area of the layout (it grows
 * as the user scrolls the page). It houses the secondary content and action
 * bar, which are rendered in using portals.
 */
const FixedLayer: React.SFC<FixedLayerProps> & { styles: any } = ({
  layerRef,
  Overlay = styles.Overlay,
}) => (
  <Consumer>
    {({ clientTop, mainContentLocation }) => (
      <Overlay ref={layerRef} mainContentLocation={mainContentLocation} />
    )}
  </Consumer>
);

FixedLayer.defaultProps = {
  Overlay: styles.Overlay,
};

FixedLayer.styles = styles;

export default FixedLayer;
