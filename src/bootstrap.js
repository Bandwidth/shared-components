/**
 * Import this in your main file to bootstrap some global CSS and font properties
 */

import { injectGlobal } from 'styled-components';

import catapultTheme from './theme/catapultTheme';
import irisTheme from './theme/irisTheme';

import eot from './fonts/Bandwidth_34eef440b4b051f3bd41c51dd36ec882.eot';
import woff2 from './fonts/Bandwidth_34eef440b4b051f3bd41c51dd36ec882.woff2';
import woff from './fonts/Bandwidth_34eef440b4b051f3bd41c51dd36ec882.woff';
import ttf from './fonts/Bandwidth_34eef440b4b051f3bd41c51dd36ec882.ttf';
import svg from './fonts/Bandwidth_34eef440b4b051f3bd41c51dd36ec882.svg';

const bootstrapFromTheme = (theme) => {
  /* eslint-disable no-unused-expressions */
  injectGlobal`
    * {
      box-sizing: border-box;
    }

    body, html {
      width: 100%;
      height: 100%;
      font-family: ${theme.fonts.brand};
      font-size: 14px;
      letter-spacing: 0.28px;
      margin: 0;
      line-height: 1.5;
      background: ${theme.colors.background.default};
      color: ${theme.colors.text.default};
    }

    #main {
      width: 100%;
      height: 100%;
    }

    /* font - brand font */
    @import url('https://fonts.googleapis.com/css?family=Overpass:100,100i,200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i');

    /* font - icons */
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

    /* scrollbars */

    ::-webkit-scrollbar {
      width: 0.5em;
      height: 0.5em;
    }

    ::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.25);
    }

    ::-webkit-scrollbar-track {
      background: #f3f3f3;
    }
  `;
};

const base = () => bootstrapFromTheme(irisTheme);
base.catapult = () => bootstrapFromTheme(catapultTheme);

export default base;
