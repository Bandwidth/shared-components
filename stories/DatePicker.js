import React from 'react';
import { storiesOf } from '@storybook/react';
import DatePicker from 'components/DatePicker';

class ConnectedDatePicker extends React.Component {
  state = {
    date: null,
  };

  render() {
    return (
      <DatePicker
        {...this.props}
        {...this.state}
        onDateChange={date => this.setState({ date })}
      />
    );
  }
}
class ConnectedDateRangePicker extends React.Component {
  state = {
    startDate: null,
    endDate: null,
  };

  render() {
    return (
      <DatePicker.Range
        {...this.props}
        {...this.state}
        onDatesChange={({ startDate, endDate }) =>
          this.setState({ startDate, endDate })
        }
      />
    );
  }
}

storiesOf('Date Picker', module)
  .add('standard', () => <ConnectedDatePicker />)
  .add('range', () => <ConnectedDateRangePicker />)
  .add('utc', () => (
    <ConnectedDateRangePicker
      utc
      displayFormat="MMM DD YYYY [at] HH:mm [(UTC)]"
    />
  ))
  .add('invalid', () => <ConnectedDateRangePicker invalid />)
  .add('disabled', () => <ConnectedDatePicker disabled />)
  .add('disabled start', () => (
    <ConnectedDateRangePicker disabled="startDate" />
  ))
  .add('disabled end', () => <ConnectedDateRangePicker disabled="endDate" />);
