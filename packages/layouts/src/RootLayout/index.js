import React from 'react';
import { Layout } from './components';
import { ScrollShadow } from '@bandwidth/shared-components';

export default ({ children, scrollShadowProps, ...rest }) => (
  <ScrollShadow.GlobalObserver>
    <ScrollShadow
      global
      entireViewport
      {...scrollShadowProps}
      Container={Layout}
      {...rest}
    >
      {children}
    </ScrollShadow>
  </ScrollShadow.GlobalObserver>
);
