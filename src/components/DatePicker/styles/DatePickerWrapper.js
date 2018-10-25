import styled from 'styled-components';
import overridesCss from './overridesCss';

const WIDTH = 262;

export default styled.div`
  ${overridesCss} .SingleDatePicker {
    width: ${WIDTH}px;
  }

  .DayPicker_transitionContainer {
    width: ${WIDTH - 4}px !important;
  }

  .DayPicker_weekHeader_li {
    /* a fix for the weekday headers being just 2px too large in total */
    margin-left: ${2.0 / -7.0}px;
  }
`;
