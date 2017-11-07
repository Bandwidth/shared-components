import React from 'react';
import 'react-dates/initialize';
import { DateRangePicker as LibDateRangePicker, DateRangePickerShape } from 'react-dates';
import baseCss from './reactDatesCss';
import overridesCss from './overridesCss';
import styled from 'styled-components';
import Icon from '../Icon';

const WIDTH = 550;

const Wrapper = styled.div`
  ${baseCss}
  ${overridesCss}

  .DateRangePicker {
    width: ${WIDTH}px;
  }

  .DayPicker_transitionContainer {
    width: ${WIDTH - 2}px !important;
  }
`;

const LineSeparator = styled.div`
  width: 10px;
  margin: auto ${({ theme }) => theme.padding.small};
  height: 1px;
  background: ${({ theme }) => theme.colors.border};
`;

const DateRangePicker = (props) => (
  <Wrapper>
    <LibDateRangePicker
      {...props}
      navPrev={<Icon name="back" size="12px" />}
      navNext={<Icon name="forward" size="12px" />}
      weekDayFormat="dd"
      displayFormat="MMM DD YYYY"
      customArrowIcon={<LineSeparator />}
      daySize={37}
      horizontalMargin={0}
    />
  </Wrapper>
);

DateRangePicker.propTypes = {
  ...DateRangePickerShape,
};

export default DateRangePicker;
