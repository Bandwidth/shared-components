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
    /**
     * Callback invoked when the datetime is changed. Includes an object with the signature `{startDatetime, endDatetime}`.
     * The values are provided as moment objects.
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
    // Combination of date and time.
    startDatetime: moment(),
    endDatetime: moment(),
  };

  get startDateEnabled() {
    ![true, 'startDate'].includes(this.props.disabled);
  }

  get endDateEnabled() {
    ![true, 'endDate'].includes(this.props.disabled);
  }

  handleStartTimeChange = time => {
    this.setState(({ startDatetime, endDatetime }) => {
      const newState = {
        startDatetime: moment(
          startDatetime.hours(time.hours()).minutes(time.minutes()),
        ),
        endDatetime,
      };
      this.props.onChange(newState);
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
      this.props.onChange(newState);
      return newState;
    });
  };

  handleDatesChange = ({ startDate, endDate }) => {
    // Set time from existing datetime on incoming date, since it's easier to set hours/minutes than year/month/day
    this.setState(({ startDatetime, endDatetime }) => {
      const newState = { startDatetime, endDatetime };
      if (startDate) {
        newState.startDatetime = moment(
          startDate
            .hours(startDatetime.hours())
            .minutes(startDatetime.minutes()),
        );
      }
      if (endDate) {
        newState.endDatetime = moment(
          endDate.hours(endDatetime.hours()).minutes(endDatetime.minutes()),
        );
      }
      this.props.onChange(newState);
      return newState;
    });
  };

  startDateDisabled = () => [true, 'startDate'].includes(this.props.disabled);

  endDateDisabled = () => [true, 'endDate'].includes(this.props.disabled);

  render() {
    const { onChange, ...rest } = this.props;
    const { startDatetime, endDatetime } = this.state;
    return (
      <DatePicker.Range
        startDatePlaceholderText="Now"
        endDatePlaceholderText="Forever"
        startDate={this.startDateDisabled() ? null : startDatetime}
        endDate={this.endDateDisabled() ? null : endDatetime}
        onDatesChange={this.handleDatesChange}
        calendarInfoPosition="top"
        renderCalendarInfo={() => (
          <TimePickerContainer>
            {this.startDateDisabled() || (
              <TimePicker
                name="start-time-picker"
                initialValue={startDatetime}
                onChange={this.handleStartTimeChange}
              />
            )}
            {this.endDateDisabled() || (
              <TimePicker
                name="end-time-picker"
                initialValue={endDatetime}
                onChange={this.handleEndTimeChange}
              />
            )}
          </TimePickerContainer>
        )}
        {...rest}
      />
    );
  }
}

export default DateTimeRangePicker;
