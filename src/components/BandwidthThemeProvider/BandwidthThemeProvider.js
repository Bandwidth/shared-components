import React from 'react';
import PropTypes from 'prop-types';
import { createThemeProvider } from 'react-studs';
import theme from '../../theme';
import amoebaTheme from '../../theme/amoebaTheme';
import '../../bootstrap'; // sets base CSS

const DefaultThemeProvider = createThemeProvider(theme);
DefaultThemeProvider.AmoebaThemeProvider = createThemeProvider(amoebaTheme);
export default DefaultThemeProvider;
