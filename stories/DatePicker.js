import React, { PropTypes } from 'react';
import { storiesOf } from '@storybook/react';
import DatePicker from 'components/DatePicker';

class ConnectedDatePicker extends React.Component {
  state = {
    date: null,
  };

  static propTypes = {
    className: PropTypes.string,
    invalid: PropTypes.bool
  };

  render() {
    const {
      className,
      invalid,
      ...rest
    } = this.props;

    return (
      <DatePicker
        {...this.state}
        onDateChange={date => this.setState({ date })}
        {...rest}
      />
    );
  }
}
class ConnectedDateRangePicker extends React.Component {
  state = {
    startDate: null,
    endDate: null,
  };

  static propTypes = {
    className: PropTypes.string,
    invalid: PropTypes.bool
  };

  render() {
    const {
      className,
      invalid,
      ...rest
    } = this.props;

    return (
      <DatePicker.Range
        {...this.state}
        onDatesChange={({ startDate, endDate }) =>
          this.setState({ startDate, endDate })
        }
        {...rest}
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
