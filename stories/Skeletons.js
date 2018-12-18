import React from 'react';
import { storiesOf } from '@storybook/react';
import Skeleton from 'skeletons/Skeleton';

storiesOf('Skeletons', module)
  .add('blob', () => <Skeleton width="200px" height="50px" />)
  .add('group', () => (
    <Skeleton.Group count={6}>
      <Skeleton />
    </Skeleton.Group>
  ));
