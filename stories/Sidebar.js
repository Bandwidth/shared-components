import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SidebarList from 'components/SidebarList';
import Grid from 'layouts/Grid';

storiesOf('Sidebar', module).add('types', () => (
  <Grid columns={1} maxSize="600px">
    <h2>Standard</h2>
    <SidebarList>
      <SidebarList.Item label="First" />
      <SidebarList.Item active label="Second" />
      <SidebarList.Item label="Third" />
      <SidebarList.Item label="Fourth" details="Details" />
    </SidebarList>
  </Grid>
));
