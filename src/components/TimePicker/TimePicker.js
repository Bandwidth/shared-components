import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Input from 'components/Input';
import RadioGroup from 'components/RadioGroup';
const RadioButton = RadioGroup.Button;
import moment from 'moment';

const Container = styled.div`
  display: flex;
  & > * + * {
    margin-left: var(--spacing-small);
  }
`;

const RadioContainer = styled.div`
  display: flex;
  flex: 1 1 content;
`;

const StyledInput = styled(Input.Small)`
  max-width: 52px;
  &::-webkit-datetime-edit-ampm-field,
  &::-webkit-clear-button,
  &::-webkit-inner-spin-button {
    display: none;
  }
`;

class TimePicker extends React.PureComponent {
  static propTypes = {
    /**
     * Passed through moment and format to set the initial value. By default, uses the current time.
     */
    initialValue: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    /**
     * Time format to pass to moment to format the string. Probably hh:mm or hh:mm:ss.
     */
    timeFormat: PropTypes.string,
  };

  static defaultProps = {
    initialValue: undefined,
    timeFormat: 'hh:mm',
  };

  constructor(props) {
    super(props);
    const value = moment(props.initialValue).format(this.props.timeFormat);
    const amSelected = moment(props.initialValue).hours() <= 11;
    this.state = {
      value,
      amSelected,
    };
  }

  handleOnChange = ({ value, amSelected }) => {
    if (!value) {
      return;
    }
    const timeValue = moment(value, this.props.timeFormat);
    const hours = amSelected === timeValue.hours() >= 12 ? 12 : 0;
    const sign = amSelected ? -1 : 1;
    const newValue = timeValue.add(sign * hours, 'hours');
    this.props.onChange(newValue);
  };

  handleTimeChange = ev => {
    const { amSelected } = this.state;
    const value = ev.target.value;
    this.setState({ value });
    this.handleOnChange({ value, amSelected });
  };

  handleAmPm = am => ev => {
    const { value } = this.state;
    const amSelected = am;
    this.setState({ amSelected });
    this.handleOnChange({ value, amSelected });
  };

  render() {
    const { name } = this.props;
    const { value, amSelected } = this.state;
    return (
      <Container>
        <StyledInput
          type="time"
          onChange={this.handleTimeChange}
          autoComplete={false}
          value={value}
        />
        <RadioContainer>
          <RadioButton.Small
            onChange={this.handleAmPm(true)}
            checked={amSelected}
            name={`${name}-ampm`}
            value="am"
            label="AM"
          />
          <RadioButton.Small
            onChange={this.handleAmPm(false)}
            checked={!amSelected}
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
