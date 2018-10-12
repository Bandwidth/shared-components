import React from 'react';
import { storiesOf } from '@storybook/react';
import Blob from 'skeletons/Blob';
import BlobTable from 'skeletons/BlobTable';
import BlobField from 'skeletons/BlobField';

storiesOf('Skeletons', module)
  .add('blob', () => <Blob loading width="200px" height="50px" />)
  .add('table', () => <BlobTable loading />)
  .add('field', () => (
    <BlobField.Grid>
      <BlobField loading />
      <BlobField loading helpText />
      <BlobField loading helpText />
      <BlobField loading helpText />
      <BlobField loading helpText />
      <BlobField columnSpan={2} loading helpText />
    </BlobField.Grid>
  ));
