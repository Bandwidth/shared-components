import React from 'react';
import PropTypes from 'prop-types';
import 'react-dates/initialize';
import { SingleDatePicker as LibDatePicker, SingleDatePickerShape } from 'react-dates';
import baseCss from './reactDatesCss';
import overridesCss from './overridesCss';
import styled from 'styled-components';
import Icon from '../Icon';
import theme from '../../theme';

import DateRangePicker from './DateRangePicker';

const WIDTH = 260;

// reusing the same styles
const select = theme.createSelector('DateRangePicker');

const Wrapper = styled.div`
  ${baseCss}
  ${overridesCss(select)}

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

const DatePicker = (props) => (
  <Wrapper>
    <LibDatePicker
      {...props}
      navPrev={<Icon name="back" size="12px" />}
      navNext={<Icon name="forward" size="12px" />}
      weekDayFormat="dd"
      displayFormat="MMM DD YYYY"
      daySize={37}
      horizontalMargin={0}
      numberOfMonths={1}
    />
  </Wrapper>
);

DatePicker.propTypes = {
  ...SingleDatePickerShape,
  id: PropTypes.string,
};

DatePicker.Range = DateRangePicker;

export default DatePicker;
