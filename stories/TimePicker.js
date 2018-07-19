import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TimePicker from 'components/TimePicker';
import moment from 'moment';

storiesOf('Time Picker', module)
  .add('standard', () => <TimePicker />)
  .add('initial value', () => (
    <TimePicker initialValue={moment('4:56', 'hh:mm')} />
  ));
