SidebarListItem
===============


Props
-----
Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
label|string|null|No|
details|node|null|No|
active|bool|false|No|
isNew|bool|false|No|

Renders a list item component. Use it inside a List for optimal effect.

Props:

* `label`: the main content
* `details`: some extra info to render below the label
* `active`: determines whether the item should render as active or not

TODO: refactor this to use Card.

```
<SidebarListItem label="hi" active={true} />
```
