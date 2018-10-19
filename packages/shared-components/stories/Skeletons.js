import React from 'react';
import { storiesOf } from '@storybook/react';
import Blob from 'skeletons/Blob';
import BlobTable from 'skeletons/BlobTable';
import BlobField from 'skeletons/BlobField';
// import BlobParagraph from 'skeletons/BlobParagraph';
import BlobList from 'skeletons/BlobList';
// import BlobSidebarList from 'skeletons/BlobSidebarList';

storiesOf('Skeletons', module)
  .add('blob', () => <Blob width="200px" height="50px" />)
  .add('table', () => <BlobTable />)
  .add('small table', () => <BlobTable.Small />)
  // .add('paragraph', () => <BlobParagraph />)
  // .add('sidebar', () => <BlobSidebarList />)
  .add('list', () => <BlobList />)
  .add('field', () => (
    <BlobField.Grid>
      <BlobField />
      <BlobField helpText />
      <BlobField helpText />
      <BlobField helpText />
      <BlobField helpText />
      <BlobField columnSpan={2} helpText />
    </BlobField.Grid>
  ));
