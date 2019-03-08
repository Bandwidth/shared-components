import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import FileLoader from 'components/FileLoader';

storiesOf('FileLoader', module)
  .add('types', () => <FileLoader onChange={action('fileUploaded')} />)
  .add('disabled', () => (
    <FileLoader onChange={action('fileUploaded')} disabled />
  ));
