import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'components/DatePicker';
import TimePicker from 'components/TimePicker';
import * as styles from './styles';
import moment from 'moment';
import noop from 'lodash.noop';

/**
 * **DateTimeRangePicker** combines the functionality of DatePicker.Range and TimePicker
 * into a single interface. It passes all of its props into DatePicker.Range.
 * @visibleName DateTimePicker.Range
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
     * Moment date time format to display in the time picker
     */
    timeDisplayFormat: PropTypes.string,
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
    /**
     * The current datetimes being displayed. If unset, the component will track its own internal state.
     * Datetime should be provided as an object `{start: <moment>, end: <moment>}`, where <moment>
     * is a moment object.
     */
    value: PropTypes.object,
    /**
     * Set to true if the component's value is invalid
     */
    invalid: PropTypes.bool,
    /**
     * Set to true if the component should be disabled. Alternatively, set to either 'startDate' or 'endDate'
     * to disable a particular part of the component.
     */
    disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    /**
     * Provides a different component to contain the picker
     */
    Container: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  };

  static defaultProps = {
    className: "scl-date-time-range-picker",
    onChange: noop,
    displayFormat: 'MMM DD YYYY [at] hh:mm A',
    timeDisplayFormat: 'hh:mm',
    utc: false,
    disabledStartText: 'Now',
    disabledEndText: 'Forever',
    value: undefined,
    invalid: false,
    disabled: false,
    Container: styles.RangeContainer,
  };

  static styles = styles;

  state = {
    internalValue: { start: undefined, end: undefined },
  };

  startDateDisabled = () => [true, 'startDate'].includes(this.props.disabled);

  endDateDisabled = () => [true, 'endDate'].includes(this.props.disabled);

  get moment() {
    return this.props.utc ? moment.utc : moment;
  }

  get value() {
    return this.props.value ? this.props.value : this.state.internalValue;
  }

  get startValue() {
    return this.value && this.value.start;
  }

  get endValue() {
    return this.value && this.value.end;
  }

  get momentStartValue() {
    return this.moment(this.startValue);
  }

  get momentEndValue() {
    return this.moment(this.endValue);
  }

  // Trigger onChange prop
  triggerOnChange = ({ start, end }) =>
    this.props.onChange({
      start: this.startDateDisabled() ? null : start,
      end: this.endDateDisabled() ? null : end,
    });

  handleStartTimeChange = time => {
    const start = this.momentStartValue
      .hours(time.hours())
      .minutes(time.minutes());
    const newState = {
      start,
      end: this.momentEndValue,
    };
    this.triggerOnChange(newState);
    this.setState({ internalValue: newState });
  };

  handleEndTimeChange = time => {
    const end = this.momentEndValue.hours(time.hours()).minutes(time.minutes());
    const newState = {
      start: this.momentStartValue,
      end,
    };
    this.triggerOnChange(newState);
    this.setState({ internalValue: newState });
  };

  handleDatesChange = ({ startDate, endDate }) => {
    const newState = { start: this.momentStartValue, end: this.momentEndValue };
    if (startDate) {
      newState.start = this.moment(startDate)
        .hours(this.momentStartValue.hours())
        .minutes(this.momentStartValue.minutes());
    }
    if (endDate) {
      newState.end = this.moment(endDate)
        .hours(this.momentEndValue.hours())
        .minutes(this.momentEndValue.minutes());
    }
    this.triggerOnChange(newState);
    this.setState({ internalValue: newState });
  };

  render() {
    const {
      onChange,
      disabledStartText,
      disabledEndText,
      Container,
      ...rest
    } = this.props;

    return (
      <DatePicker.Range
        startDatePlaceholderText={
          this.startDateDisabled() ? disabledStartText : null
        }
        endDatePlaceholderText={this.endDateDisabled() ? disabledEndText : null}
        startDate={this.startDateDisabled() ? null : this.momentStartValue}
        endDate={this.endDateDisabled() ? null : this.momentEndValue}
        onDatesChange={this.handleDatesChange}
        calendarInfoPosition="top"
        renderCalendarInfo={() => (
          <Container>
            {this.startDateDisabled() || (
              <TimePicker
                name="start-time-picker"
                timeFormat={this.props.timeDisplayFormat}
                value={this.momentStartValue}
                onChange={this.handleStartTimeChange}
              />
            )}
            {this.endDateDisabled() || (
              <TimePicker
                name="end-time-picker"
                timeFormat={this.props.timeDisplayFormat}
                value={this.momentEndValue}
                onChange={this.handleEndTimeChange}
              />
            )}
          </Container>
        )}
        {...rest}
      />
    );
  }
}

export default DateTimeRangePicker;
