import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Input from 'components/Input';
import RadioGroup from 'components/RadioGroup';
const RadioButton = RadioGroup.Button;
import moment from 'moment';

class TimePicker extends React.Component {
  render() {
    return <Input.Small type="time" autoComplete={false} />;
  }
}

export default TimePicker;
