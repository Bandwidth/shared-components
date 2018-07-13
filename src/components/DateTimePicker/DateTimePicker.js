import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'components/DatePicker/DatePicker';
import TimePicker from 'components/TimePicker/TimePicker';
import TimePickerContainer from './styles/DateTimePickerContainer';
import DateTimeRangePicker from './DateTimeRangePicker';
import moment from 'moment';

/**
 * **DateTimePicker** combines the functionality of DatePicker and TimePicker
 * into a single interface. It passes all of its props into DatePicker.
 */
class DateTimePicker extends React.PureComponent {
  static propTypes = {
    /**
     * A function to handle the datetime when it changes.
     */
    onDateTimeChange: PropTypes.func.isRequired,
  };

  state = {
    datetime: moment(), // Combination of date and time.
  };

  handleTimeChange = time => {
    // Set time on existing datetime
    this.setState(({ datetime }) => ({
      datetime: moment(datetime.hours(time.hours()).minutes(time.minutes())),
    }));
  };

  handleDateChange = date => {
    // Set time from existing datetime on incoming date, since it's easier to set hours/minutes than year/month/day
    this.setState(({ datetime }) => ({
      datetime: moment(
        date.hours(datetime.hours()).minutes(datetime.minutes()),
      ),
    }));
  };

  render() {
    const { datetime } = this.state;
    return (
      <DatePicker
        displayFormat="MMM DD YYYY [at] hh:mm A"
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
        {...this.props}
      />
    );
  }
}

DateTimePicker.Range = DateTimeRangePicker;

export default DateTimePicker;
