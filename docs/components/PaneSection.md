PaneSection
===========


Props
-----

Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
title|string|null|No|Optional title for the top of the pane section.
children|node||Yes|Pane section contents.
id|string|null|No|Adds an id to the section.
className|string|null|No|Adds a class name to the section.

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
