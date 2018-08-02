import React from 'react';
import { SplitContentLayout } from '../../../../src';
import { Form, SidebarList } from '../widgets';
import { H2, Button, Anchor } from '@bandwidth/shared-components';

export default () => (
  <SplitContentLayout mainContentLocation="left">
    <SplitContentLayout.SecondaryContent>
      <H2>Form</H2>
      <Form columns={1} />
    </SplitContentLayout.SecondaryContent>
    <SplitContentLayout.MainContent gutter>
      <H2>Content</H2>
      <SplitContentLayout.MainContent.Box>
        <Form />
      </SplitContentLayout.MainContent.Box>
    </SplitContentLayout.MainContent>
  </SplitContentLayout>
);
