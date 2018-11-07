import React from 'react';
import PropTypes from 'prop-types';
import { InputContainer } from './styles';
import TimeInput from 'time-input';

export default class InternalTimePicker extends React.Component {
  static propTypes = {
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    disabled: false,
  };

  render() {
    return (
      <InputContainer disabled={this.props.disabled}>
        <TimeInput {...this.props} />
      </InputContainer>
    );
  }
}
