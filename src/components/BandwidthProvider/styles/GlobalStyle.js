import { createGlobalStyle, css } from 'styled-components';
import datePickerCss from 'components/DatePicker/styles/baseCss';
import { cssvars } from 'themes';
import { themeGet } from 'extensions';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body, html {
    width: 100%;
    min-height: 100vh;
    position: relative;
    color: ${themeGet('colors.text.default')};
    font-size: ${themeGet('fontSizes.default')};
  }

  :root {
    ${props => cssvars(props.theme)}
  }

  ${datePickerCss}
`;
