import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import '../../bootstrap'; // sets base CSS

const Root = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div>
      {children}
    </div>
  </ThemeProvider>
);

Root.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Root;
