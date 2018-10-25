import { createGlobalStyle } from 'styled-components';
import datePickerCss from 'components/DatePicker/styles/baseCss';

const baseStaticUrl =
  'https://d33tyzwyttq9qm.cloudfront.net/static/static/media/Bandwidth.1833ce88';

const woff2 = `${baseStaticUrl}.woff2`;
const woff = `${baseStaticUrl}.woff`;
const eot = `${baseStaticUrl}.eot`;
const ttf = `${baseStaticUrl}.ttf`;
const svg = `${baseStaticUrl}.svg`;

/* eslint-disable no-unused-expressions */
export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body, html {
    width: 100%;
    min-height: 100vh;
    position: relative;
  }

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

  /* font - brand font */
  @import url('https://fonts.googleapis.com/css?family=Overpass:100,100i,200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i');

  ${datePickerCss}
`;
