import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles';
import { ScrollShadow } from 'behaviors';
import { ScrollShadowProps } from 'behaviors/ScrollShadow/ScrollShadow';

interface RootLayoutProps {
  /**
   * Content to render within the layout - generally, your App
   */
  children: React.ReactNode;
  /**
   * Any properties you want to pass into the internal ScrollShadow
   */
  scrollShadowProps?: ScrollShadowProps;
  /**
   * A Layout component to use in place of the default div.
   */
  Layout?: any;
}

const RootLayout: React.FC<RootLayoutProps> = ({
  children,
  scrollShadowProps,
  Layout,
  ...rest
}) => (
  <ScrollShadow global {...scrollShadowProps} {...rest}>
    <Layout>{children}</Layout>
  </ScrollShadow>
);

RootLayout.defaultProps = {
  Layout: styles.Layout,
};

export default RootLayout;
