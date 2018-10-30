import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles';
import { Provider } from './Context';

import FixedLayer from './FixedLayer/FixedLayer';

export default class SplitContentLayout extends React.PureComponent {
  static propTypes = {
    /**
     * Children should always be SplitContentLayout.MainContent or
     * SplitContentLayout.SecondaryContent
     */
    children: PropTypes.node,
    /**
     * Flips the location of the main content in the layout
     */
    mainContentLocation: PropTypes.oneOf(['left', 'right']),
    /**
     * Controls the color of the content background
     */
    gutter: PropTypes.bool,
    /**
     * A component to override the one that renders the top-level element of this
     * layout pattern
     */
    RootLayout: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  };

  static defaultProps = {
    mainContentLocation: 'right',
    gutter: false,
    RootLayout: styles.RootLayout,
  };

  static styles = styles;

  render() {
    const {
      children,
      mainContentLocation,
      gutter,
      RootLayout,
      ...rest
    } = this.props;

    return (
      <Provider mainContentLocation={mainContentLocation}>
        {(rootElementRef, layerElementRef) => (
          <RootLayout
            ref={rootElementRef}
            className="content-layout split-content-layout"
            gutter={gutter}
            {...rest}
          >
            {children}
            <FixedLayer layerRef={layerElementRef} />
          </RootLayout>
        )}
      </Provider>
    );
  }
}
