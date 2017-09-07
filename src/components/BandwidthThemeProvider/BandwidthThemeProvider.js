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

BandwidthThemeProvider.usage = `
Use this component at the root of your application to provide our default theme to all your components, and bootstrap your global CSS with some preferred defaults.

You can only pass one child to BandwidthThemeProvider. Usually this is an App root component, or a Router, or something like that.

\`\`\`
<BandwidthThemeProvider>
  <App />
</BandwidthThemeProvider>
\`\`\`
`;

export default BandwidthThemeProvider;
