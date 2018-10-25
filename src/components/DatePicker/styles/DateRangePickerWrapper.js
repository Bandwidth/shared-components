import styled from 'styled-components';
import overridesCss from './overridesCss';

const WIDTH = 554;

export default styled.div`
  ${overridesCss} .DateRangePicker {
    width: ${WIDTH}px;
  }

  .CalendarMonth,
  .DayPicker_weekHeader {
    padding-left: 0 !important;
    padding-right: 26px !important;
  }
`;
