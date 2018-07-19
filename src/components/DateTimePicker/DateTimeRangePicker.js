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
    /**
     * Use UTC datetime.
     */
    utc: PropTypes.bool,
    /**
     * Text to use when the start date is disabled.
     */
    disabledStartText: PropTypes.string,
    /**
     * Text to use when the end date is disabled.
     */
    disabledEndText: PropTypes.string,
  };

  static defaultProps = {
    onChange: noop,
    displayFormat: 'MMM DD YYYY [at] hh:mm A',
    utc: false,
    disabledStartText: 'Now',
    disabledEndText: 'Forever',
  };

  constructor(props) {
    super(props);
    this.state = {
      // Combination of date and time.
      startDatetime: this.moment(),
      endDatetime: this.moment(),
    };
  }

  startDateDisabled = () => [true, 'startDate'].includes(this.props.disabled);

  endDateDisabled = () => [true, 'endDate'].includes(this.props.disabled);

  get moment() {
    return this.props.utc ? moment.utc : moment;
  }

  // Trigger onChange prop
  triggerOnChange = ({ startDatetime, endDatetime }) =>
    this.props.onChange({
      startDatetime: this.startDateDisabled() ? null : startDatetime,
      endDatetime: this.endDateDisabled() ? null : endDatetime,
    });

  handleStartTimeChange = time => {
    this.setState(({ startDatetime, endDatetime }) => {
      const newState = {
        startDatetime: this.moment(
          startDatetime.hours(time.hours()).minutes(time.minutes()),
        ),
        endDatetime,
      };
      this.triggerOnChange(newState);
      return newState;
    });
  };

  handleEndTimeChange = time => {
    this.setState(({ startDatetime, endDatetime }) => {
      const newState = {
        startDatetime,
        endDatetime: this.moment(
          endDatetime.hours(time.hours()).minutes(time.minutes()),
        ),
      };
      this.triggerOnChange(newState);
      return newState;
    });
  };

  handleDatesChange = ({ startDate, endDate }) => {
    // Set time from existing datetime on incoming date, since it's easier to set hours/minutes than year/month/day
    this.setState(({ startDatetime, endDatetime }) => {
      const newState = { startDatetime, endDatetime };
      if (startDate) {
        newState.startDatetime = this.moment(
          startDate
            .hours(startDatetime.hours())
            .minutes(startDatetime.minutes()),
        );
      }
      if (endDate) {
        newState.endDatetime = this.moment(
          endDate.hours(endDatetime.hours()).minutes(endDatetime.minutes()),
        );
      }
      this.triggerOnChange(newState);
      return newState;
    });
  };

  render() {
    const {
      onChange,
      disabledStartText,
      disabledEndText,
      ...rest
    } = this.props;
    const { startDatetime, endDatetime } = this.state;

    return (
      <DatePicker.Range
        startDatePlaceholderText={disabledStartText}
        endDatePlaceholderText={disabledEndText}
        startDate={this.startDateDisabled() ? null : startDatetime}
        endDate={this.endDateDisabled() ? null : endDatetime}
        onDatesChange={this.handleDatesChange}
        calendarInfoPosition="top"
        renderCalendarInfo={() => (
          <TimePickerContainer>
            {this.startDateDisabled() || (
              <TimePicker
                name="start-time-picker"
                value={startDatetime}
                onChange={this.handleStartTimeChange}
              />
            )}
            {this.endDateDisabled() || (
              <TimePicker
                name="end-time-picker"
                value={endDatetime}
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
