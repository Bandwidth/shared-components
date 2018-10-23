import React from 'react';
import { SplitContentLayout, H2, Button, Anchor } from '../../../../../src';
import { Form, SidebarList, ActionBarExpandingContent } from '../widgets';

export default () => (
  <SplitContentLayout mainContentLocation="left" gutter>
    <SplitContentLayout.SecondaryContent>
      <H2>Form</H2>
      <Form columns={1} />
      <br />
      <Form columns={1} />
      <br />
      <Form columns={1} />
      <br />
      <Form columns={1}>
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
    </SplitContentLayout.SecondaryContent>
    <SplitContentLayout.MainContent>
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
    </SplitContentLayout.MainContent>
  </SplitContentLayout>
);
