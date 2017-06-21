/**
 * Import this in your main file to bootstrap some global CSS and font properties
 */

import { injectGlobal } from 'styled-components';
import defaultTheme from './theme';

import eot from './fonts/Bandwidth_34eef440b4b051f3bd41c51dd36ec882.eot';
import woff2 from './fonts/Bandwidth_34eef440b4b051f3bd41c51dd36ec882.woff2';
import woff from './fonts/Bandwidth_34eef440b4b051f3bd41c51dd36ec882.woff';
import ttf from './fonts/Bandwidth_34eef440b4b051f3bd41c51dd36ec882.ttf';
import svg from './fonts/Bandwidth_34eef440b4b051f3bd41c51dd36ec882.svg';

/* eslint-disable no-unused-expressions */
injectGlobal`
  body, html {
    width: 100%;
    height: 100%;
    font-family: ${defaultTheme.fonts.brand};
    font-size: 14px;
    letter-spacing: 0.28px;
    margin: 0;
  }

  #main {
    width: 100%;
    height: 100%;
  }

  /* fonts - icons */
  @font-face {
    font-family: 'Bandwidth';
    src: url(${eot});
    src: url(${woff2}) format('woff2'),
        url(${woff}) format('woff'),
        url(${ttf}) format('truetype'),
        url(${svg}) format('svg');
    font-weight: normal;
    font-style: normal;
  }
`;
