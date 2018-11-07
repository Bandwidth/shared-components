import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles';
import { ScrollShadow } from 'behaviors';

const RootLayout = ({ children, scrollShadowProps, Layout, ...rest }) => (
  <ScrollShadow global {...scrollShadowProps} {...rest}>
    <Layout>{children}</Layout>
  </ScrollShadow>
);

RootLayout.propTypes = {
  /**
   * Content to render within the layout - generally, your App
   */
  children: PropTypes.node,
  /**
   * Any properties you want to pass into the internal ScrollShadow
   */
  scrollShadowProps: PropTypes.object,
  /**
   * A Layout component to use in place of the default div.
   */
  Layout: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

RootLayout.defaultProps = {
  Layout: styles.Layout,
};

export default RootLayout;
