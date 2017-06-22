import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import '../../bootstrap'; // sets base CSS

const BandwidthThemeProvider = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div>
      {children}
    </div>
  </ThemeProvider>
);

BandwidthThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

BandwidthThemeProvider.usage = `
# BandwidthThemeProvider

Use this component at the root of your application to provide our default theme to all your components, and bootstrap your global CSS with some preferred defaults.

\`\`\`
<BandwidthThemeProvider>
  <App />
</BandwidthThemeProvider>
\`\`\`
`;

export default BandwidthThemeProvider;
