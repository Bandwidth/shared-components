import React from 'react';
import {
  SplitContentLayout,
  H2,
  Button,
  Link,
} from '@bandwidth/shared-components';
import { Form, SidebarList, ActionBarExpandingContent } from '../widgets';

export default () => (
  <SplitContentLayout>
    <SplitContentLayout.MainContent>
      <H2>Content</H2>
      <SplitContentLayout.MainContent.Box>
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
                <Link onClick={toggleExpanded}>Show expanded</Link>
                <Button>Submit</Button>
              </React.Fragment>
            )}
          </SplitContentLayout.ActionBar>
        </Form>
      </SplitContentLayout.MainContent.Box>
    </SplitContentLayout.MainContent>
  </SplitContentLayout>
);
