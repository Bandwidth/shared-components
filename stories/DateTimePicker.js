import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import DateTimePicker from 'components/DateTimePicker';
import moment from 'moment';

storiesOf('Date Time Picker', module)
  .add('standard', () => (
    <div>
      <DateTimePicker />
      <DateTimePicker />
    </div>
  ))
  .add('range', () => <DateTimePicker.Range />);
