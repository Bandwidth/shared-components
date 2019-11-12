import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  Form,
  SidebarList,
  Navigation,
  ActionBarExpandingContent,
} from './widgets';
import { H2, Button, Link } from 'components';

import SplitContentLayout from 'layouts/SplitContentLayout';
import RootLayout from 'layouts/RootLayout';
import { useState } from '@storybook/addons';

storiesOf('SplitContentLayout', module)
  .add('with component content', () => (
    <RootLayout>
      <Navigation />
      <SplitContentLayout gutter>
        <SplitContentLayout.SecondaryContent overlapBorder>
          <H2 spacing={{ horizontal: 'lg', vertical: 'lg' }}>List</H2>
          <SidebarList count={3} activeIndex={1} />
        </SplitContentLayout.SecondaryContent>
        <SplitContentLayout.MainContent>
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
                    <Link onClick={toggleExpanded}>Show expanded</Link>
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
      <SplitContentLayout gutter>
        <SplitContentLayout.SecondaryContent overlapBorder>
          <H2 spacing={{ horizontal: 'lg', vertical: 'lg' }}>List</H2>
          <SidebarList />
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
                    <Link onClick={toggleExpanded}>Show expanded</Link>
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
                  <Link onClick={toggleExpanded}>Show expanded</Link>
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
                  <Link onClick={toggleExpanded}>Show expanded</Link>
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
    </RootLayout>
  ))
  .add('left-side with action bar on left', () => (
    <RootLayout>
      <Navigation />
      <SplitContentLayout mainContentLocation="left" actionBarLocation="left">
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
                  <Link onClick={toggleExpanded}>Show expanded</Link>
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
    </RootLayout>
  ))
  .add('with popup', () => {
    const [show, setShow] = useState();

    return (
      <RootLayout>
        <Navigation />
        <SplitContentLayout gutter>
          <SplitContentLayout.SecondaryContent overlapBorder>
            <H2 spacing={{ horizontal: 'lg', vertical: 'lg' }}>List</H2>
            <SidebarList count={3} activeIndex={1} />
          </SplitContentLayout.SecondaryContent>
          <SplitContentLayout.MainContent>
            <H2>Content</H2>
            <SplitContentLayout.MainContent.Box>
              <Button onClick={() => setShow(!show)}>Show popup</Button>
            </SplitContentLayout.MainContent.Box>
            <SplitContentLayout.Popup
              expanded={show}
              onClose={() => setShow(false)}
            >
              <Form />
              <Form />
              <Form />
              <Form />
            </SplitContentLayout.Popup>
          </SplitContentLayout.MainContent>
        </SplitContentLayout>
      </RootLayout>
    );
  });
