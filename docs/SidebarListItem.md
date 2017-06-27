SidebarListItem
===============


Props
-----

Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
label|string|null|No|The main details of the list item.
details|node|null|No|Extra details to render on another line.
active|bool|false|No|Renders the item as the one currently selected.
isNew|bool|false|No|Adds a new badge to the list item.
className|string|null|No|Adds a class name to the outer item element.
id|string|null|No|Adds an id to the outer item element.

Renders a list item component. Use it inside a List for optimal effect.

Props:

* `label`: the main content
* `details`: some extra info to render below the label
* `active`: determines whether the item should render as active or not

TODO: refactor this to use Card.

```
<SidebarListItem label="hi" active={true} />
```
