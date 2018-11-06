import { createGlobalStyle } from 'styled-components';
import datePickerCss from 'components/DatePicker/styles/baseCss';

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

  /* font - brand font */
  @import url('https://fonts.googleapis.com/css?family=Overpass:100,100i,200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i');

  ${datePickerCss}
`;
