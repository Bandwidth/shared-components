import React from 'react';
import RadioButton from 'components/RadioButton';
import moment, { Moment } from 'moment';
import * as styles from './styles';
import InternalTimePicker from './InternalTimePicker';

interface TimePickerProps {
  /**
   * The current time value of the widget. The value should be a moment object or a unix time.
   * If value is not passed, the component will control its own time.
   */
  value: Moment | number;
  /**
   * Called with the new time value when a change happens
   */
  onChange: (time: Moment) => void;
  /**
   * Time format to pass to moment to format the string. Probably hh:mm or HH:mm for 24 hour time
   */
  timeFormat: string;
  /**
   * Should the time input be disabled?
   */
  disabled: boolean;
  /**
   * Name of the component
   */
  name: string;
}

/**
 * A widget that allows users to select a time.
 */
class TimePicker extends React.PureComponent<TimePickerProps> {
  static propTypes = {};

  static defaultProps = {
    value: undefined,
    timeFormat: 'hh:mm',
    disabled: false,
  };

  static styles = styles;

  state = {
    internalValue: undefined,
  };

  get twentyFourHour() {
    return /[Hk]/g.test(this.props.timeFormat);
  }

  handleOnChange = ({ value, amSelected }) => {
    if (!value) {
      return;
    }
    const timeValue = moment(value, this.props.timeFormat);
    const timeValueIsAm = timeValue.hours() < 12;
    let sign = 0;
    if (!this.twentyFourHour && amSelected !== timeValueIsAm)
      sign = amSelected ? -1 : 1;
    const newValue = timeValue.add(sign * 12, 'hours');
    this.setState({ internalValue: newValue });
    this.props.onChange(newValue);
  };

  handleTimeChange = date =>
    this.handleOnChange({ value: date, amSelected: this.isAm });

  handleAmPm = amSelected => ev =>
    this.handleOnChange({ value: this.momentValue, amSelected });

  get value() {
    return this.props.value ? this.props.value : this.state.internalValue;
  }

  get momentValue() {
    return moment(this.value);
  }

  get isAm() {
    return this.momentValue.hours() <= 11;
  }

  render() {
    const { name, value, timeFormat, onChange, disabled, ...rest } = this.props;
    return (
      <styles.TimeContainer>
        <InternalTimePicker
          {...rest}
          disabled={disabled}
          onChange={this.handleTimeChange}
          value={this.momentValue.format(this.props.timeFormat)}
        />
        {!this.twentyFourHour && (
          <styles.RadioContainer>
            <RadioButton.Small
              onChange={this.handleAmPm(true)}
              checked={this.isAm}
              name={`${name}-ampm`}
              value="am"
              label="AM"
              disabled={disabled}
            />
            <RadioButton.Small
              onChange={this.handleAmPm(false)}
              checked={!this.isAm}
              name={`${name}-ampm`}
              value="pm"
              label="PM"
              disabled={disabled}
            />
          </styles.RadioContainer>
        )}
      </styles.TimeContainer>
    );
  }
}

export default TimePicker;
