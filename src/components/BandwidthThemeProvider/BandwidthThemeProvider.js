import React from 'react';
import PropTypes from 'prop-types';
import { withProps } from 'recompose';
import StyleRoot from 'components/BandwidthProvider/styles/StyleRoot';
import irisTheme, { catapult as catapultTheme } from '../../theme';

/**
 * @deprecated Please see [BandwidthProvider](/#!/BandwidthProvider)
 */
const BandwidthThemeProvider = ({ children, theme }) => (
  <StyleRoot customTheme={theme}>{children}</StyleRoot>
);

BandwidthThemeProvider.defaultProps = {
  theme: irisTheme,
};

BandwidthThemeProvider.CatapultThemeProvider = withProps({
  theme: catapultTheme,
})(BandwidthThemeProvider);

export default BandwidthThemeProvider;
