import styled from 'styled-components';
import baseCss from './reactDatesCss';
import overridesCss from './overridesCss';

const WIDTH = 260;




export default styled.div`
  ${baseCss}
  ${overridesCss}

  .SingleDatePicker {
    width: ${WIDTH}px;
  }

  .DayPicker_transitionContainer {
    width: ${WIDTH - 2}px !important;
  }

  .DayPicker_weekHeader_li {
    /* a fix for the weekday headers being just 2px too large in total */
    margin-left: ${2.0 / -7.0}px;
  }
`;
