import React from 'react';
import PropTypes from 'prop-types';
import { withProps } from 'recompose';
import { ThemeProvider } from 'styled-components';
import irisTheme, { catapult as catapultTheme, NAMESPACE } from '../../theme';

/**
 * @deprecated Please see [BandwidthProvider](/#!/BandwidthProvider)
 */
const BandwidthThemeProvider = ({ children, theme }) => (
  <ThemeProvider theme={{ [NAMESPACE]: theme }}>
    {React.cloneElement(children, { customTheme: theme })}
  </ThemeProvider>
);

BandwidthThemeProvider.defaultProps = {
  theme: irisTheme,
};

BandwidthThemeProvider.CatapultThemeProvider = withProps({
  theme: catapultTheme,
})(BandwidthThemeProvider);

export default BandwidthThemeProvider;
