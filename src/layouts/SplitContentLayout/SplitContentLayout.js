import React from 'react';
import { RootLayout } from './styles';
import { Provider } from './Context';

import FixedLayer from './FixedLayer/FixedLayer';

export default class SplitContentLayout extends React.PureComponent {
  render() {
    const { children, mainContentLocation, gutter, ...rest } = this.props;

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
