import React from 'react';
import { storiesOf } from '@storybook/react';
import Blob from 'skeletons/Blob';
import BlobTable from 'skeletons/BlobTable';
import BlobList from 'skeletons/BlobList';

storiesOf('Skeletons', module)
  .add('blob', () => <Blob width="200px" height="50px" />)
  .add('list', () => <BlobList width="100%" />);
