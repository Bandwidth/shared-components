import React from 'react';
import PropTypes from 'prop-types';
import { withCompiledTheme } from 'react-studs';
import theme from '../../theme';
import { ThemeProvider } from 'styled-components';
import irisTheme, { catapult as catapultTheme } from '../../theme';
import '../../bootstrap'; // sets base CSS

const DefaultThemeProvider = withCompiledTheme(irisTheme)(ThemeProvider);
DefaultThemeProvider.Catapult = withCompiledTheme(catapultTheme)(ThemeProvider);
export default DefaultThemeProvider;
