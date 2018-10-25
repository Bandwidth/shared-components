import React from 'react';
import { Layout } from './styles';
import { ScrollShadow } from 'behaviors';

export default ({ children, scrollShadowProps, ...rest }) => (
  <ScrollShadow global {...scrollShadowProps} {...rest}>
    <Layout>{children}</Layout>
  </ScrollShadow>
);
