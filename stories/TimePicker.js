import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TimePicker from 'components/TimePicker';

storiesOf('Time Picker', module).add('standard', () => <TimePicker />);
