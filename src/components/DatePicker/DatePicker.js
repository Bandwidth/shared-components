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

/**
 * This is a styling wrapper around [react-dates](https://github.com/airbnb/react-dates).
 * Please see [here](https://github.com/airbnb/react-dates#singledatepicker) for prop types.
 *
 * The picker can be controlled by setting the props `date` and `onDateChange`.
 * `date` should be set to a moment object of the currently selected date,
 * while `onDateChange` should be a function that handles the date when it
 * changes.
 */
class DatePicker extends React.PureComponent {
  static Range = DateRangePicker;

  static propTypes = {
    ...SingleDatePickerShape,
    id: PropTypes.string,
    /**
     * A component to wrap and control styles of the underlying react-dates DatePicker
     */
    Wrapper: PropTypes.func,
  };

  static defaultProps = {
    Wrapper: DatePickerWrapper,
  };

  state = {
    focused: false,
  };

  handleFocusChange = ({ focused }) => this.setState({ focused });

  render() {
    const { Wrapper, ...rest } = this.props;
    const { focused } = this.state;
    return (
      <Wrapper
        className={focused && 'focused'}
        openDirection={this.props.openDirection}
      >
        <LibDatePicker
          navPrev={<Icon name="back" />}
          navNext={<Icon name="forward" />}
          weekDayFormat="dd"
          displayFormat="MMM DD YYYY"
          daySize={37}
          horizontalMargin={0}
          numberOfMonths={1}
          hideKeyboardShortcutsPanel
          focused={focused}
          onFocusChange={this.handleFocusChange}
          {...rest}
        />
      </Wrapper>
    );
  }
}

export default DatePicker;
