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

class TimePicker extends React.Component {
  constructor(props) {
    super(props);
    const value = props.value || moment();
    const amSelected = value.hours() <= 11;
    this.state = {
      value,
      amSelected,
    };
  }

  handleOnChange = ({ value, amSelected }) => {
    const hours = amSelected === value.hours() >= 12 ? 12 : 0;
    const sign = amSelected ? -1 : 1;
    const newValue = value.add(sign * hours, 'hours');
    this.props.onChange(newValue);
  };

  handleTimeChange = ev => {
    const { amSelected } = this.state;
    const value = moment(ev.target.value, 'hh:mm');
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
          value={value.format('hh:mm')}
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
