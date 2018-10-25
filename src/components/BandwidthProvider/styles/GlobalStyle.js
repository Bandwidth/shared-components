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

  ${datePickerCss}
`;
