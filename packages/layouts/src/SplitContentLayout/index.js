import React, { createRef } from 'react';
import { RootLayout } from './components';
import { Provider } from './Context';
import MainContent from './MainContent';
import SecondaryContent from './SecondaryContent';
import ActionBar from './ActionBar';
import Modal from './Modal';
import FixedLayer from './FixedLayer';
import throttle from 'lodash.throttle';

export default class SplitContentLayout extends React.PureComponent {
  render() {
    const { children, mainContentLocation, gutter, ...rest } = this.props;

    return (
      <Provider mainContentLocation={mainContentLocation}>
        {(rootElementRef, layerElementRef) => (
          <RootLayout
            innerRef={rootElementRef}
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

SplitContentLayout.MainContent = MainContent;
SplitContentLayout.SecondaryContent = SecondaryContent;
SplitContentLayout.ActionBar = ActionBar;
SplitContentLayout.Modal = Modal;
