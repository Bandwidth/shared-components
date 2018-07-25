import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Input from 'components/Input';
import RadioGroup from 'components/RadioGroup';
const RadioButton = RadioGroup.Button;
import moment from 'moment';
import Container from './styles/Container';
import RadioContainer from './styles/RadioContainer';
import StyledInput from './styles/StyledInput';
import { TimePicker as LibTimePicker } from '@blueprintjs/datetime';

class TimePicker extends React.PureComponent {
  static propTypes = {
    /**
     * The current time value of the widget. The value should be a moment object or a unix time.catch.
     * If value is not passed, the component will control its own time.
     */
    value: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    /**
     * Time format to pass to moment to format the string. Probably hh:mm or hh:mm:ss.
     */
    timeFormat: PropTypes.string,
    twentyFourHour: PropTypes.bool,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    value: undefined,
    timeFormat: 'hh:mm',
    twentyFourHour: false,
    disabled: false,
  };

  state = {
    internalValue: undefined,
  };

  handleOnChange = ({ value, amSelected }) => {
    const { twentyFourHour } = this.props;
    if (!value) {
      return;
    }
    const timeValue = moment(value);
    const timeValueIsAm = timeValue.hours() < 12;
    let sign = 0;
    if (amSelected !== timeValueIsAm) sign = amSelected ? -1 : 1;
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
    const { name, disabled, twentyFourHour } = this.props;
    return (
      <Container>
        <StyledInput
          selectAllOnFocus
          disabled={disabled}
          onChange={this.handleTimeChange}
          value={this.momentValue.toDate()}
        />
        {!twentyFourHour && (
          <RadioContainer>
            <RadioButton.Small
              onChange={this.handleAmPm(true)}
              checked={this.isAm}
              name={`${name}-ampm`}
              value="am"
              label="AM"
            />
            <RadioButton.Small
              onChange={this.handleAmPm(false)}
              checked={!this.isAm}
              name={`${name}-ampm`}
              value="pm"
              label="PM"
            />
          </RadioContainer>
        )}
      </Container>
    );
  }
}

export default TimePicker;
