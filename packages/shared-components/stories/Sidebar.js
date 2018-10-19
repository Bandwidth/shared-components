import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SidebarList from 'components/SidebarList';
import Grid from 'layouts/Grid';

storiesOf('Sidebar', module)
  .add('types', () => (
    <Grid columns={1} maxSize="600px">
      <SidebarList>
        <SidebarList.Item isNew label="First" />
        <SidebarList.Item active label="Second" />
        <SidebarList.Item label="Third" />
        <SidebarList.Item label="Fourth" details="Details" />
      </SidebarList>
    </Grid>
  ))
  .add('skeleton', () => (
    <Grid columns={1} maxSize="600px">
      <SidebarList>
        <SidebarList.Item.Skeleton />
        <SidebarList.Item.Skeleton />
        <SidebarList.Item.Skeleton details />
        <SidebarList.Item.Skeleton details />
      </SidebarList>
    </Grid>
  ));
