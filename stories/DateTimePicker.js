import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import DateTimePicker from 'components/DateTimePicker';
import moment from 'moment';

class ConnectedDatePicker extends React.Component {
  state = {
    focused: false,
  };

  render() {
    return (
      <DateTimePicker
        focused={this.state.focused}
        onFocusChange={({ focused }) => this.setState({ focused })}
        displayFormat="MMM DD YYYY [at] hh:mm A"
      />
    );
  }
}
class ConnectedDateRangePicker extends React.Component {
  state = {
    focusedInput: null,
  };

  render() {
    return (
      <DateTimePicker.Range
        {...this.state}
        onFocusChange={focusedInput => this.setState({ focusedInput })}
      />
    );
  }
}

storiesOf('Date Time Picker', module)
  .add('standard', () => (
    <div>
      <ConnectedDatePicker />
      <ConnectedDatePicker />
    </div>
  ))
  .add('range', () => <ConnectedDateRangePicker />);
