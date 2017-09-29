import React from 'react';
import PropTypes from 'prop-types';
import { createThemeProvider } from 'react-studs';
import theme from '../../theme';
import '../../bootstrap'; // sets base CSS

export default createThemeProvider(theme);
