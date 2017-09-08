import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import '../../bootstrap'; // sets base CSS

const BandwidthThemeProvider = ({ children }) => (
  <ThemeProvider theme={theme}>
    {React.Children.only(children)}
  </ThemeProvider>
);

BandwidthThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BandwidthThemeProvider;
