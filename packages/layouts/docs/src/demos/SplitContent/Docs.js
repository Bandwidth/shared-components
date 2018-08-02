import React from 'react';
import {
  H1,
  H2,
  H3,
  P,
  List,
  Code,
  Spacing,
  Accordion,
} from '@bandwidth/shared-components';
import { Example } from '../common';

const examples = [
  `// a simple example with some forms.
<SplitContentLayout>
  <SplitContentLayout.SecondaryContent>
    <H2>Sidebar Title</H2>
    <CustomForm />
  </SplitContentLayout.SecondaryContent>
  <SplitContentLayout.MainContent>
    <H2>Content Title</H2>
    <SplitContentLayout.MainContent.Box>
      <CustomForm />
    </SplitContentLayout.MainContent.Box>
  </SplitContentLayout.MainContent>
</SplitContentLayout>
`,
  `// with an action bar, sidebar list, and a gray-colored main content background.
<SplitContentLayout>
  {/*
    the overlapBorder prop makes the secondary content draw over the layout border,
    perfect for interfacing with the shared-component's SidebarList
  */}
  <SplitContentLayout.SecondaryContent overlapBorder>
    <H2>Sidebar Title</H2>
    <SidebarList />
  </SplitContentLayout.SecondaryContent>
  {/* adding 'gutter' changes the main content background */}
  <SplitContentLayout.MainContent gutter>
    <H2>Content Title</H2>
    <SplitContentLayout.MainContent.Box>
      <CustomForm />
      {/* action bar can be placed anywhere inside the layout */}
      <SplitContentLayout.ActionBar>
        <Anchor>Click</Anchor>
        <Button>Continue</Button>
      </SplitContentLayout.ActionBar>
    </SplitContentLayout.MainContent.Box>
  </SplitContentLayout.MainContent>
</SplitContentLayout>
`,
  `// main content can be moved to the left. action bar can be in secondary content.
// you don't actually need to change the order of the items in JSX, just provide
// the 'mainContentLocation' prop.
<SplitContentLayout mainContentLocation="left">
  <SplitContentLayout.SecondaryContent>
    <H2>Sidebar Title</H2>
    <CustomForm />
    <SplitContentLayout.ActionBar>
      <Anchor>Click</Anchor>
      <Button>Continue</Button>
    </SplitContentLayout.ActionBar>
  </SplitContentLayout.SecondaryContent>
  <SplitContentLayout.MainContent>
    <H2>Content Title</H2>
    <SplitContentLayout.MainContent.Box>
      <CustomForm />
    </SplitContentLayout.MainContent.Box>
  </SplitContentLayout.MainContent>
</SplitContentLayout>
`,
  `// let's add some expanding content to that action bar
<SplitContentLayout>
  <SplitContentLayout.SecondaryContent overlapBorder>
    <H2>Sidebar Title</H2>
    <SidebarList />
  </SplitContentLayout.SecondaryContent>
  <SplitContentLayout.MainContent gutter>
    <H2>Content Title</H2>
    <SplitContentLayout.MainContent.Box>
      <CustomForm />
      {/* the renderExpandingContent prop provides some values for us to use */}
      <SplitContentLayout.ActionBar
        renderExpandingContent={({
          expanded,
          toggleExpanded,
          barHeight
        }) => (
          <div>
            <Button onClick={toggleExpanded}>Hide this content again</Button>
          </div>
        )}
      >
        {/* provide a function as children to access expand toggle function */}
        {({ toggleExpanded }) => (
          <Button onClick={toggleExpanded}>Toggle Expanded Content</Button>
        )}
      </SplitContentLayout.ActionBar>
    </SplitContentLayout.MainContent.Box>
  </SplitContentLayout.MainContent>
</SplitContentLayout>
`,
];

export default () => (
  <React.Fragment>
    <Spacing>
      <H1>Split Content Layout</H1>
      <P>
        The <Code>&lt;SplitContentLayout&gt;</Code> component manages a two-pane
        content view. It provides a few things out of the box:
      </P>
      <List>
        <List.Item>Main Content scrolls with the page</List.Item>
        <List.Item>Secondary Content (sidebar) scrolls independently</List.Item>
        <List.Item>Optional Action Bar stays fixed at the bottom</List.Item>
        <List.Item>
          Secondary Content automatically resizes to fill available vertical
          space
        </List.Item>
        <List.Item>
          Action Bar includes expandable full-height content for advanced uses
        </List.Item>
        <List.Item>Scroll shadows are present on all scrolling areas</List.Item>
      </List>
      <P spacing={{ vertical: 'lg' }}>
        Use the navigation above to view live demos
      </P>
      <Accordion label="Components &amp; Props">
        <H3 spacing={{ vertical: 'lg' }}>SplitContentLayout</H3>
        <P>The root layout component.</P>
        <List>
          <List.Item>
            <Code>mainContentLocation</Code>: <Code>right</Code> or{' '}
            <Code>left</Code>, determines which side the main (large) content
            goes on.
          </List.Item>
        </List>
        <H3 spacing={{ vertical: 'lg' }}>SplitContentLayout.MainContent</H3>
        <P>The main content of the page. Takes up 2/3 of the space.</P>
        <List>
          <List.Item>
            <Code>gutter</Code>: if true, will make the background a light gray.
          </List.Item>
        </List>
        <H3 spacing={{ vertical: 'lg' }}>SplitContentLayout.MainContent.Box</H3>
        <P>A simple box which looks nice inside MainContent. Has no props.</P>
        <H3 spacing={{ vertical: 'lg' }}>
          SplitContentLayout.SecondaryContent
        </H3>
        <P>
          Supporting content which takes up one third of the page. Usually this
          is a sidebar with a list of items. Sometimes it's a form.
        </P>
        <List>
          <List.Item>
            <Code>overlapBorder</Code>: designed for the{' '}
            <Code>SidebarList</Code> component from our shared component
            library, this will turn off the padding inside the container and
            cause content to overlap the dividing border of the layout. This
            allows you to 'override' the border and achieve a flowing effect
            with the list items.
          </List.Item>
        </List>
        <H3 spacing={{ vertical: 'lg' }}>SplitContentLayout.ActionBar</H3>
        <P>
          A docked bar for user controls. Supports adding more content in an
          expanding full-height box which can be toggled on or off.
        </P>
        <P>
          A note on <Code>expanded</Code>: You can choose to provide the{' '}
          <Code>expanded</Code> prop to make the expanded state a controlled
          property, or you can omit it and use the various methods to toggle the
          expanded state from within the component itself.
        </P>
        <List>
          <List.Item>
            <Code>expanded</Code>: provide this prop to make the expanded state
            controlled by your application's logic. Useful when you need to
            trigger the expanded state from an external component or Redux.
          </List.Item>
          <List.Item>
            <Code>renderExpandingContent</Code>: a render-prop which you can use
            to render the content inside the expanding container. It is passed
            an object with three values:
            <List>
              <List.Item>
                <Code>expanded</Code>: whether or not the bar is currently
                expanded (or in the process of expanding).
              </List.Item>
              <List.Item>
                <Code>toggleExpanded</Code>: a function which you can call to
                toggle the expanded state of the bar. You can also pass a
                boolean value to set it directly.
              </List.Item>
              <List.Item>
                <Code>barHeight</Code>: an integer which is the height, in
                pixels, of the action bar. You can use this to customize the
                rendering behavior of your content. For instance, you can
                actually display a clickable toggle inside the bar itself by
                creating the toggle with a negative relative position based on
                this value.
              </List.Item>
            </List>
          </List.Item>
          <List.Item>
            <Code>children</Code>: you can supply a function to the children to
            receive an object which contains a <Code>toggleExpanded</Code> key.
            Assign this to a button click handler to quickly and easily create a
            expanding toggle.
          </List.Item>
        </List>
      </Accordion>
    </Spacing>
    <H2 spacing={{ horizontal: 'lg', bottom: 'lg' }}>Code Examples</H2>
    {examples.map((code, idx) => <Example key={idx}>{code}</Example>)}
  </React.Fragment>
);
