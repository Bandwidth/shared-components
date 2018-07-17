import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'components/DatePicker/DatePicker';
import TimePicker from 'components/TimePicker/TimePicker';
import TimePickerContainer from './styles/DateTimeRangePickerContainer';
import moment from 'moment';
import { noop } from 'lodash';

/**
 * **DateTimeRangePicker** combines the functionality of DatePicker.Range and TimePicker
 * into a single interface. It passes all of its props into DatePicker.Range.
 */
class DateTimeRangePicker extends React.PureComponent {
  static propTypes = {
    onDateTimeChange: PropTypes.func.isRequired,
    displayFormat: PropTypes.string,
  };

  static defaultProps = {
    onDateTimeChange: noop,
    displayFormat: 'MMM DD YYYY [at] hh:mm A',
  };

  state = {
    // Combination of date and time.
    startDatetime: moment(),
    endDatetime: moment(),
  };

  handleStartTimeChange = time => {
    this.setState(({ startDatetime, endDatetime }) => {
      const newState = {
        startDatetime: moment(
          startDatetime.hours(time.hours()).minutes(time.minutes()),
        ),
        endDatetime,
      };
      this.props.onDateTimeChange(newState);
      return newState;
    });
  };

  handleEndTimeChange = time => {
    this.setState(({ startDatetime, endDatetime }) => {
      const newState = {
        startDatetime,
        endDatetime: moment(
          endDatetime.hours(time.hours()).minutes(time.minutes()),
        ),
      };
      this.props.onDateTimeChange(newState);
      return newState;
    });
  };

  handleDatesChange = ({ startDate, endDate }) => {
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
      this.props.onDateTimeChange(newState);
      return newState;
    });
  };

  render() {
    const { onDateTimeChange, ...rest } = this.props;
    const { startDatetime, endDatetime } = this.state;
    return (
      <DatePicker.Range
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
        {...rest}
      />
    );
  }
}

export default DateTimeRangePicker;
