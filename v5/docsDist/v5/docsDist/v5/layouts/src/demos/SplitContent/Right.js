import React from 'react';
import { SplitContentLayout } from '../../../../src';
import { Form, SidebarList } from '../widgets';
import { H2, Button, Anchor } from '@bandwidth/shared-components';

export default () => (
  <SplitContentLayout gutter>
    <SplitContentLayout.SecondaryContent overlapBorder>
      <H2 spacing={{ horizontal: 'lg', vertical: 'lg' }}>List</H2>
      <SidebarList count={3} activeIndex={1} />
    </SplitContentLayout.SecondaryContent>
    <SplitContentLayout.MainContent>
      <H2>Content</H2>
      <SplitContentLayout.MainContent.Box>
        <Form />
      </SplitContentLayout.MainContent.Box>
    </SplitContentLayout.MainContent>
  </SplitContentLayout>
);
