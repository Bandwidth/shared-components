import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'components/DatePicker/DatePicker';
import TimePicker from 'components/TimePicker/TimePicker';
import TimePickerContainer from './styles/DateTimeRangePickerContainer';
import moment from 'moment';

class DateTimeRangePicker extends React.PureComponent {
  state = {
    // Combination of date and time.
    startDatetime: moment(),
    endDatetime: moment(),
  };

  handleStartTimeChange = time => {
    this.setState(({ startDatetime, endDatetime }) => ({
      startDatetime: moment(
        startDatetime.hours(time.hours()).minutes(time.minutes()),
      ),
      endDatetime,
    }));
  };
  handleEndTimeChange = time => {
    this.setState(({ startDatetime, endDatetime }) => ({
      startDatetime,
      endDatetime: moment(
        endDatetime.hours(time.hours()).minutes(time.minutes()),
      ),
    }));
  };

  handleDatesChange = ({ startDate, endDate }) => {
    console.log({ startDate, endDate });
    // Set time from existing datetime on incoming date, since it's easier to set hours/minutes than year/month/day
    this.setState(({ startDatetime, endDatetime }) => {
      const newState = {
        startDatetime: moment(
          startDate
            .hours(startDatetime.hours())
            .minutes(startDatetime.minutes()),
        ),
      };
      newState.endDatetime = endDate
        ? moment(
            endDate.hours(endDatetime.hours()).minutes(endDatetime.minutes()),
          )
        : newState.startDatetime;
      return newState;
    });
  };

  render() {
    const { startDatetime, endDatetime } = this.state;
    return (
      <DatePicker.Range
        {...this.props}
        displayFormat="MMM DD YYYY [at] hh:mm A"
        startDate={startDatetime}
        endDate={endDatetime}
        onDatesChange={this.handleDatesChange}
        calendarInfoPosition="top"
        renderCalendarInfo={() => (
          <TimePickerContainer>
            <TimePicker
              name="start-time-picker"
              value={startDatetime}
              onChange={this.handleStartTimeChange}
            />
            <TimePicker
              name="end-time-picker"
              value={endDatetime}
              onChange={this.handleEndTimeChange}
            />
          </TimePickerContainer>
        )}
      />
    );
  }
}

export default DateTimeRangePicker;
