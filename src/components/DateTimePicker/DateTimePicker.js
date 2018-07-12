import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'components/DatePicker/DatePicker';
import TimePicker from 'components/TimePicker/TimePicker';
import TimePickerContainer from './styles/DateTimePickerContainer';
import DateTimeRangePicker from './DateTimeRangePicker';
import moment from 'moment';

class DateTimePicker extends React.Component {
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
        {...this.props}
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
      />
    );
  }
}

DateTimePicker.Range = DateTimeRangePicker;

export default DateTimePicker;
