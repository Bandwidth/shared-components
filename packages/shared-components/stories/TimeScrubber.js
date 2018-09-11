import React from 'react';
import { storiesOf } from '@storybook/react';
import TimeScrubber from 'components/TimeScrubber';
import moment from 'moment';

class ControlledTimeScrubber extends React.Component {
  state = {};

  handleChange = value => {
    this.setState({ value });
  };

  render() {
    return (
      <TimeScrubber
        {...this.props}
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
  }
}

storiesOf('Time Scrubber', module)
  .add('standard', () => <TimeScrubber />)
  .add('disabled', () => <TimeScrubber disabled />)
  .add('controlled', () => <ControlledTimeScrubber />)
  .add('range-limited', () => (
    <ControlledTimeScrubber allowedRange={[5, 19]} />
  ));
