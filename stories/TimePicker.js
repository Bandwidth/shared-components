import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TimePicker from 'components/TimePicker';
import moment from 'moment';

class ControlledTimePicker extends React.Component {
  state = {};

  handleChange = value => {
    action('onChange')(value);
    this.setState({ value });
  };

  render() {
    return <TimePicker value={this.state.value} onChange={this.handleChange} />;
  }
}

storiesOf('Time Picker', module)
  .add('standard', () => <TimePicker onChange={action('onChange')} />)
  .add('disabled', () => <TimePicker disabled onChange={action('onChange')} />)
  .add('24 hour', () => (
    <TimePicker twentyFourHour onChange={action('onChange')} />
  ))
  .add('fixed value', () => (
    <TimePicker value={moment('4:56', 'hh:mm')} onChange={action('onChange')} />
  ))
  .add('controlled', () => <ControlledTimePicker />);
