import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import DatePicker from 'components/DatePicker';
import TimePicker from 'components/TimePicker';
import moment from 'moment';

class ConnectedDatePicker extends React.Component {
  state = {
    date: null,
    focused: false,
  };

  render() {
    return (
      <DatePicker
        date={this.state.date && moment(this.state.date).add(7, 'hours')}
        focused={this.state.focused}
        onDateChange={date => this.setState({ date })}
        onFocusChange={({ focused }) => this.setState({ focused })}
        displayFormat="MMM DD YYYY [at] hh:mm A"
        calendarInfoPosition="top"
        renderCalendarInfo={() => <TimePicker />}
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

storiesOf('Date Time Picker', module)
  .add('standard', () => <ConnectedDatePicker />)
  .add('range', () => <ConnectedDateRangePicker />);
