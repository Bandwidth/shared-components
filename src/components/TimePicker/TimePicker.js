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

class TimePicker extends React.PureComponent {
  static propTypes = {
    /**
     * TODO: Rewrite this description
     */
    value: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    /**
     * Time format to pass to moment to format the string. Probably hh:mm or hh:mm:ss.
     */
    timeFormat: PropTypes.string,
  };

  static defaultProps = {
    value: undefined,
    timeFormat: 'hh:mm',
  };

  state = {
    internalValue: undefined,
  };

  handleOnChange = ({ value, amSelected }) => {
    if (!value) {
      return;
    }
    const timeValue = moment(value, this.props.timeFormat);
    const hours = amSelected === timeValue.hours() >= 12 ? 12 : 0;
    const sign = amSelected ? -1 : 1;
    const newValue = timeValue.add(sign * hours, 'hours');
    this.setState({ internalValue: newValue });
    this.props.onChange(newValue);
  };

  handleTimeChange = ev =>
    this.handleOnChange({ value: ev.target.value, amSelected: this.isAm });

  handleAmPm = amSelected => ev =>
    this.handleOnChange({ value: this.momentValue, amSelected });

  get value() {
    return this.props.value ? this.props.value : this.state.internalValue;
  }

  get momentValue() {
    return moment.isMoment(this.value) ? this.value : moment(this.value);
  }

  get isAm() {
    return this.momentValue.hours() <= 11;
  }

  render() {
    const { name } = this.props;
    return (
      <Container>
        <StyledInput
          type="time"
          onChange={this.handleTimeChange}
          autoComplete={false}
          value={this.momentValue.format(this.props.timeFormat)}
        />
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
      </Container>
    );
  }
}

export default TimePicker;
