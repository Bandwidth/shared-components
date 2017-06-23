PaneSection
===========


Props
-----
Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
title|string|null|No|
children|node||Yes|

# PaneSection

Provides a nice delineated section of content within a Pane. Add a `title` to display a little divider with the title inside.

Does no layout on children. Add your own padding to children if needed.

```
<Pane title="parent">
  <PaneSection title="foo">
    Content
  </PaneSection>
  <PaneSection title="bar">
    Content
  </PaneSection>
</Pane>
```
