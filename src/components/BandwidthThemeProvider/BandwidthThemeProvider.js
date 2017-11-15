import React from 'react';
import PropTypes from 'prop-types';
import { withProps } from 'recompose';
import { ThemeProvider } from 'styled-components';
import irisTheme, { catapult as catapultTheme, NAMESPACE } from '../../theme';
import '../../bootstrap'; // sets base CSS

const BandwidthThemeProvider = ({ children, theme }) => (
  <ThemeProvider theme={{ [NAMESPACE]: theme }}>{children}</ThemeProvider>
);

BandwidthThemeProvider.defaultProps = {
  theme: irisTheme,
};

BandwidthThemeProvider.CatapultThemeProvider = withProps({
  theme: catapultTheme,
})(BandwidthThemeProvider);

export default BandwidthThemeProvider;
