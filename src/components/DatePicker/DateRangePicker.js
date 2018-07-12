import React from 'react';
import PropTypes from 'prop-types';
import 'react-dates/initialize';
import {
  DateRangePicker as LibDateRangePicker,
  DateRangePickerShape,
} from 'react-dates';
import Icon from '../Icon';
import DateRangePickerWrapper from './styles/DateRangePickerWrapper';
import DateRangePickerLineSeparator from './styles/DateRangePickerLineSeparator';

const DateRangePicker = ({ Wrapper, LineSeparator, ...props }) => (
  <Wrapper>
    <LibDateRangePicker
      navPrev={<Icon name="back" size="12px" />}
      navNext={<Icon name="forward" size="12px" />}
      weekDayFormat="dd"
      displayFormat="MMM DD YYYY"
      customArrowIcon={<LineSeparator />}
      daySize={37}
      horizontalMargin={0}
      hideKeyboardShortcutsPanel
      {...props}
    />
  </Wrapper>
);

DateRangePicker.propTypes = {
  ...DateRangePickerShape,
  startDateId: PropTypes.string,
  endDateId: PropTypes.string,
  /**
   * A component to wrap and control styles of the underlying react-dates DatePicker
   */
  Wrapper: PropTypes.func,
  /**
   * A component that renders the separator line between the two inputs
   */
  LineSeparator: PropTypes.func,
};

DateRangePicker.defaultProps = {
  Wrapper: DateRangePickerWrapper,
  LineSeparator: DateRangePickerLineSeparator,
};

export default DateRangePicker;
