import React from 'react';
import {
  SplitContentLayout,
  H2,
  Button,
  Anchor,
} from '@bandwidth/shared-components';
import { Form, SidebarList } from '../widgets';

export default () => (
  <SplitContentLayout mainContentLocation="left" gutter>
    <SplitContentLayout.SecondaryContent>
      <H2>Form</H2>
      <Form columns={1} />
    </SplitContentLayout.SecondaryContent>
    <SplitContentLayout.MainContent>
      <H2>Content</H2>
      <SplitContentLayout.MainContent.Box>
        <Form />
      </SplitContentLayout.MainContent.Box>
    </SplitContentLayout.MainContent>
  </SplitContentLayout>
);
