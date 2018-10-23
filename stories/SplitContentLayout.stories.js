import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  Form,
  SidebarList,
  Navigation,
  ActionBarExpandingContent,
} from './widgets';
import { H2, Button, Anchor } from '@bandwidth/shared-components';

import SplitContentLayout from '../src/SplitContentLayout';
import RootLayout from '../src/RootLayout';

storiesOf('SplitContentLayout', module)
  .add('with component content', () => (
    <RootLayout>
      <Navigation />
      <SplitContentLayout>
        <SplitContentLayout.SecondaryContent overlapBorder>
          <H2 spacing={{ horizontal: 'lg', vertical: 'lg' }}>List</H2>
          <SidebarList count={3} activeIndex={1} />
        </SplitContentLayout.SecondaryContent>
        <SplitContentLayout.MainContent gutter>
          <H2>Content</H2>
          <SplitContentLayout.MainContent.Box>
            <Form>
              <SplitContentLayout.ActionBar
                renderExpandingContent={params => (
                  <ActionBarExpandingContent {...params}>
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
    </RootLayout>
  ))
  .add('with component content and overflow', () => (
    <RootLayout>
      <Navigation />
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
    </RootLayout>
  ))
  .add('left-side with component content', () => (
    <RootLayout>
      <Navigation />
      <SplitContentLayout mainContentLocation="left">
        <SplitContentLayout.SecondaryContent>
          <H2>Form</H2>
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
        <SplitContentLayout.MainContent gutter>
          <H2>Content</H2>
          <SplitContentLayout.MainContent.Box>
            <Form />
          </SplitContentLayout.MainContent.Box>
        </SplitContentLayout.MainContent>
      </SplitContentLayout>
    </RootLayout>
  ))
  .add('left-side with component content and overflow', () => (
    <RootLayout>
      <Navigation />
      <SplitContentLayout mainContentLocation="left">
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
        </SplitContentLayout.MainContent>
      </SplitContentLayout>
    </RootLayout>
  ));
