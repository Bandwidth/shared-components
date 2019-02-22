import React from 'react';
import DatePicker from 'components/DatePicker';
import TimePicker from 'components/TimePicker';
import * as styles from './styles';
import DateTimeRangePicker from './DateTimeRangePicker';
import moment from 'moment';
import noop from 'lodash.noop';
import { SingleDatePickerShape } from 'react-dates';

interface DateTimePickerProps {
  /**
   * A function to handle the datetime when it changes.
   */
  onChange: (change: moment.Moment) => void;
  /**
   * Moment date time format to display in the input
   */
  displayFormat: string;
  /**
   * Use UTC datetime.
   */
  utc: boolean;
  /**
   * The current datetime being displayed. If unset, the component will track its own internal state.
   * Datetime should be provided as a moment object.
   */
  value: object;
  /**
   * Set to true if the component's value is invalid
   */
  invalid: boolean;
  /**
   * Set to true if the component should be disabled.
   */
  disabled: boolean;
  /**
   * Provides a different component to contain the picker
   */
  Container: any;
}

/**
 * **DateTimePicker** combines the functionality of DatePicker and TimePicker
 * into a single interface. It passes all of its props into DatePicker.
 */
class DateTimePicker extends React.PureComponent<
  DateTimePickerProps & SingleDatePickerShape
> {
  static defaultProps = {
    onChange: noop,
    displayFormat: 'MMM DD YYYY [at] hh:mm A',
    utc: false,
    value: undefined,
    invalid: false,
    disabled: false,
    Container: styles.Container,
  };

  static styles = styles;
  static Range = DateTimeRangePicker;

  state = {
    internalValue: undefined,
  };

  get moment() {
    return this.props.utc ? moment.utc : moment;
  }

  get value() {
    return this.props.value ? this.props.value : this.state.internalValue;
  }

  get momentValue() {
    return this.moment(this.value);
  }

  handleTimeChange = time => {
    // Set time on existing datetime
    const newDatetime = this.momentValue
      .hours(time.hours())
      .minutes(time.minutes());
    this.props.onChange(newDatetime);
    this.setState({ internalValue: newDatetime });
  };

  handleDateChange = date => {
    // Set time from existing datetime on incoming date, since it's easier to set hours/minutes than year/month/day
    const newDatetime = this.moment(date)
      .hours(this.momentValue.hours())
      .minutes(this.momentValue.minutes());
    this.props.onChange(newDatetime);
    this.setState({ internalValue: newDatetime });
  };

  render() {
    const { onChange, Container, ...rest } = this.props;
    return (
      <DatePicker
        date={this.momentValue}
        onDateChange={this.handleDateChange}
        calendarInfoPosition="top"
        renderCalendarInfo={() => (
          <Container>
            <TimePicker
              name="time-picker"
              value={this.momentValue}
              onChange={this.handleTimeChange}
            />
          </Container>
        )}
        {...rest}
      />
    );
  }
}

export default DateTimePicker;
