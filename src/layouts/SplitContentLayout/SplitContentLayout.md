This component can be used to create complex, interactive page-level layout for content which has "primary" and "secondary" views. Common examples are:

* A list of entitites, and a detailed view for the selected entity
* A workspace with forms, and a short paragraph of documentation on what to do
* An area to review information, and a small form which is used to submit it

The code below can help get you started, but you'll want to check out the [full examples and docs](/shared-components/layouts) for more. We can't demonstrate page layouts in these docs since the styling is meant for top-level elements only.

```html static
<SplitContentLayout gutter>
  <SplitContentLayout.SecondaryContent overlapBorder>
    <H2 spacing={{ horizontal: 'lg', vertical: 'lg' }}>List</H2>
    <SplitContentLayout.SecondaryContent.SidebarList>
      <SplitContentLayout.SecondaryContent.SidebarList.Item>
        Item One
      </SplitContentLayout.SecondaryContent.SidebarList.Item>
      {/* etc */}
    </SplitContentLayout.SecondaryContent.SidebarList>
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
              <Anchor onClick={toggleExpanded}>Toggle expanded</Anchor>
              <Anchor onClick={this.showPopup}>Show popup</Anchor>
              <Button>Submit</Button>
            </React.Fragment>
          )}
        </SplitContentLayout.ActionBar>
      </Form>
    </SplitContentLayout.MainContent.Box>
    <SplitContentLayout.Popup
      onClose={this.hidePopup}
      expanded={showPopup}
    >
      <Form />
    </SplitContentLayout.Popup>
  </SplitContentLayout.MainContent>
</SplitContentLayout>
```
