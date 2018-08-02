import React from 'react';
import { SplitContentLayout } from '../../../../src';
import { Form, SidebarList, ActionBarExpandingContent } from '../widgets';
import { H2, Button, Anchor } from '@bandwidth/shared-components';

export default () => (
  <SplitContentLayout>
    <SplitContentLayout.SecondaryContent overlapBorder>
      <H2 spacing={{ horizontal: 'lg', vertical: 'lg' }}>List</H2>
      <SidebarList />
    </SplitContentLayout.SecondaryContent>
    <SplitContentLayout.MainContent gutter>
      <H2>Content</H2>
      <SplitContentLayout.MainContent.Box>
        <Form />
      </SplitContentLayout.MainContent.Box>
      <SplitContentLayout.MainContent.Box>
        <Form />
      </SplitContentLayout.MainContent.Box>
      <SplitContentLayout.MainContent.Box>
        <Form />
      </SplitContentLayout.MainContent.Box>
      <SplitContentLayout.MainContent.Box>
        <Form />
      </SplitContentLayout.MainContent.Box>
      <SplitContentLayout.MainContent.Box>
        <Form />
      </SplitContentLayout.MainContent.Box>
      <SplitContentLayout.MainContent.Box>
        <Form>
          <SplitContentLayout.ActionBar
            renderExpandingContent={params => (
              <ActionBarExpandingContent {...params}>
                <Form />
                <br />
                <Form />
                <br />
                <Form />
                <br />
                <Form />
              </ActionBarExpandingContent>
            )}
          >
            {({ toggleExpanded }) => (
              <React.Fragment>
                <Anchor onClick={toggleExpanded}>Show expanded</Anchor>
                <Button>Submit</Button>
              </React.Fragment>
            )}
          </SplitContentLayout.ActionBar>
        </Form>
      </SplitContentLayout.MainContent.Box>
    </SplitContentLayout.MainContent>
  </SplitContentLayout>
);
