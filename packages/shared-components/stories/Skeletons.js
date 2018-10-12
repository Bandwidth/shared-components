import React from 'react';
import { storiesOf } from '@storybook/react';
import Blob from 'skeletons/Blob';
import BlobTable from 'skeletons/BlobTable';
import BlobField from 'skeletons/BlobField';
import BlobParagraph from 'skeletons/BlobParagraph';
import BlobList from 'skeletons/BlobList';

storiesOf('Skeletons', module)
  .add('blob', () => <Blob loading width="200px" height="50px" />)
  .add('table', () => <BlobTable loading />)
  .add('small table', () => <BlobTable.Small loading />)
  .add('paragraph', () => <BlobParagraph loading />)
  .add('list', () => <BlobList loading />)
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
