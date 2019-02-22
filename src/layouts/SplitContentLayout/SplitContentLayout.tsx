import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles';
import { Provider } from './Context';
import FixedLayer from './FixedLayer';
import MainContent from './MainContent';
import SecondaryContent from './SecondaryContent';
import ActionBar from './ActionBar';
import Popup from './Popup';

interface SplitContentLayoutProps {
  /**
   * Children should always be SplitContentLayout.MainContent or
   * SplitContentLayout.SecondaryContent
   */
  children: React.ReactNode;
  /**
   * Flips the location of the main content in the layout
   */
  mainContentLocation: 'left' | 'right';
  /**
   * Controls the color of the content background
   */
  gutter: boolean;
  /**
   * A component to override the one that renders the top-level element of this
   * layout pattern
   */
  RootLayout: any;
}

export default class SplitContentLayout extends React.PureComponent<
  SplitContentLayoutProps
> {
  static defaultProps = {
    mainContentLocation: 'right',
    gutter: false,
    RootLayout: styles.RootLayout,
  };

  static styles = styles;

  static MainContent = MainContent;
  static SecondaryContent = SecondaryContent;
  static ActionBar = ActionBar;
  static Popup = Popup;

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
