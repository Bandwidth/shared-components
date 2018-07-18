import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'components/DatePicker/DatePicker';
import TimePicker from 'components/TimePicker/TimePicker';
import TimePickerContainer from './styles/DateTimePickerContainer';
import DateTimeRangePicker from './DateTimeRangePicker';
import moment from 'moment';
import { noop } from 'lodash';

/**
 * **DateTimePicker** combines the functionality of DatePicker and TimePicker
 * into a single interface. It passes all of its props into DatePicker.
 */
class DateTimePicker extends React.PureComponent {
  static propTypes = {
    /**
     * A function to handle the datetime when it changes.
     */
    onChange: PropTypes.func.isRequired,
    /**
     * Moment date time format to display in the input
     */
    displayFormat: PropTypes.string,
  };

  static defaultProps = {
    onChange: noop,
    displayFormat: 'MMM DD YYYY [at] hh:mm A',
  };

  state = {
    datetime: moment(), // Combination of date and time.
  };

  handleTimeChange = time => {
    // Set time on existing datetime
    this.setState(({ datetime }) => {
      const newDateTime = moment(
        datetime.hours(time.hours()).minutes(time.minutes()),
      );
      this.props.onChange(newDateTime);
      return {
        datetime: newDateTime,
      };
    });
  };

  handleDateChange = date => {
    // Set time from existing datetime on incoming date, since it's easier to set hours/minutes than year/month/day
    this.setState(({ datetime }) => {
      const newDateTime = moment(
        date.hours(datetime.hours()).minutes(datetime.minutes()),
      );
      this.props.onChange(newDateTime);
      return {
        datetime: newDateTime,
      };
    });
  };

  render() {
    const { onChange, ...rest } = this.props;
    const { datetime } = this.state;
    return (
      <DatePicker
        date={datetime}
        onDateChange={this.handleDateChange}
        calendarInfoPosition="top"
        renderCalendarInfo={() => (
          <TimePickerContainer>
            <TimePicker
              name="time-picker"
              value={datetime}
              onChange={this.handleTimeChange}
            />
          </TimePickerContainer>
        )}
        {...rest}
      />
    );
  }
}

DateTimePicker.Range = DateTimeRangePicker;

export default DateTimePicker;
