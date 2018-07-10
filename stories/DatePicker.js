import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import DatePicker from 'components/DatePicker';

class ConnectedDatePicker extends React.Component {
  state = {
    date: null,
    focused: false,
  };

  render() {
    return (
      <DatePicker
        {...this.state}
        onDateChange={date => this.setState({ date })}
        onFocusChange={({ focused }) => this.setState({ focused })}
      />
    );
  }
}
class ConnectedDateRangePicker extends React.Component {
  state = {
    startDate: null,
    endDate: null,
    focusedInput: null,
  };

  render() {
    return (
      <DatePicker.Range
        {...this.state}
        onDatesChange={({ startDate, endDate }) =>
          this.setState({ startDate, endDate })
        }
        onFocusChange={focusedInput => this.setState({ focusedInput })}
      />
    );
  }
}

storiesOf('Date Picker', module)
  .add('standard', () => <ConnectedDatePicker />)
  .add('range', () => <ConnectedDateRangePicker />);
