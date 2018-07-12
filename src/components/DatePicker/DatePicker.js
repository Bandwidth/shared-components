import React from 'react';
import PropTypes from 'prop-types';
import 'react-dates/initialize';
import {
  SingleDatePicker as LibDatePicker,
  SingleDatePickerShape,
} from 'react-dates';
import Icon from '../Icon';
import DatePickerWrapper from './styles/DatePickerWrapper';

import DateRangePicker from './DateRangePicker';
import moment from 'moment';
moment.updateLocale('en', {
  weekdaysMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
});

const DatePicker = ({ Wrapper, ...props }) => (
  <Wrapper>
    <LibDatePicker
      navPrev={<Icon name="back" />}
      navNext={<Icon name="forward" />}
      weekDayFormat="dd"
      displayFormat="MMM DD YYYY"
      daySize={37}
      horizontalMargin={0}
      numberOfMonths={1}
      hideKeyboardShortcutsPanel
      {...props}
    />
  </Wrapper>
);

DatePicker.propTypes = {
  ...SingleDatePickerShape,
  id: PropTypes.string,
  /**
   * A component to wrap and control styles of the underlying react-dates DatePicker
   */
  Wrapper: PropTypes.func,
};

DatePicker.defaultProps = {
  Wrapper: DatePickerWrapper,
};

DatePicker.Range = DateRangePicker;

export default DatePicker;
