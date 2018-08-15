import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import DateTimePicker from 'components/DateTimePicker';
import moment from 'moment';

storiesOf('Date Time Picker', module)
  .add('standard', () => <DateTimePicker onChange={action('onChange')} />)
  .add('fixed time', () => (
    <DateTimePicker
      value={moment('July 19, 2018 3:15 PM', 'LLL')}
      onChange={action('onChange')}
    />
  ))
  .add('range', () => <DateTimePicker.Range onChange={action('onChange')} />)
  .add('fixed time range', () => (
    <DateTimePicker.Range
      value={{
        start: moment('July 19, 2018 3:15 PM', 'LLL'),
        end: moment('July 25, 2018 8:20 AM', 'LLL'),
      }}
      onChange={action('onChange')}
    />
  ))
  .add('utc', () => (
    <DateTimePicker.Range
      utc
      displayFormat="MMM DD YYYY [at] HH:mm [(UTC)]"
      timeDisplayFormat="HH:mm"
      onChange={action('onChange')}
    />
  ))
  .add('utc disabled', () => (
    <DateTimePicker.Range
      disabled="startDate"
      utc
      displayFormat="MMM DD YYYY [at] HH:mm [(UTC)]"
      timeDisplayFormat="HH:mm"
      onChange={action('onChange')}
    />
  ))
  .add('invalid', () => (
    <DateTimePicker.Range invalid onChange={action('onChange')} />
  ))
  .add('disabled', () => (
    <DateTimePicker.Range disabled onChange={action('onChange')} />
  ))
  .add('disabled start', () => (
    <DateTimePicker.Range disabled="startDate" onChange={action('onChange')} />
  ))
  .add('disabled end', () => (
    <DateTimePicker.Range disabled="endDate" onChange={action('onChange')} />
  ));
