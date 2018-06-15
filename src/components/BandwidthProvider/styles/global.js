import { injectGlobal } from 'styled-components';

import eot from 'fonts/Bandwidth.eot';
import woff2 from 'fonts/Bandwidth.woff2';
import woff from 'fonts/Bandwidth.woff';
import ttf from 'fonts/Bandwidth.ttf';
import svg from 'fonts/Bandwidth.svg';

/* eslint-disable no-unused-expressions */
injectGlobal`
  * {
    box-sizing: border-box;
  }

  body, html {
    width: 100%;
    height: 100%;
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
