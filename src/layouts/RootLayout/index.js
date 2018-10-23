import React from 'react';
import { Layout } from './components';
import { ScrollShadow } from '../../behaviors';

export default ({ children, scrollShadowProps, ...rest }) => (
  <ScrollShadow global {...scrollShadowProps} {...rest}>
    <Layout>{children}</Layout>
  </ScrollShadow>
);
