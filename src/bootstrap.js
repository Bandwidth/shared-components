/**
 * Import this in your main file to bootstrap some global CSS and font properties
 */

import { injectGlobal } from 'styled-components';

import catapultTheme from './theme/catapultTheme';
import irisTheme from './theme/irisTheme';

import eot from './fonts/Bandwidth.eot';
import woff2 from './fonts/Bandwidth.woff2';
import woff from './fonts/Bandwidth.woff';
import ttf from './fonts/Bandwidth.ttf';
import svg from './fonts/Bandwidth.svg';

/**
 * @deprecated
 * Please see BandwidthProvider for global styling setup
 */
const bootstrapFromTheme = theme => {
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
  `;
};

const base = () => bootstrapFromTheme(irisTheme);
base.catapult = () => bootstrapFromTheme(catapultTheme);

export default base;
