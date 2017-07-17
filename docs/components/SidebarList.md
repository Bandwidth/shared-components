SidebarList
===========


Props
-----

Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
selectedIndex|number|-1|No|Optional: indicate which item should be considered active.
children|node||Yes|List items. An 'active' prop will be passed to the item that matches selectedIndex.
hasNextPage|bool|false|No|Indicates whether the list should show that it has a next page.
hasPreviousPage|bool|false|No|Indicates whether the list should show that it has a previous page.
onNextPageClicked|func|() => null|No|Called when the button to load the next page is clicked.
onPreviousPageClicked|func|() => null|No|Called when the button to load the previous page is clicked.
className|string|null|No|Adds a class name to the containing list element.
id|string|null|No|Adds an id to the containing list element.

Lays out items vertically and provides selection context. Does not do scrolling.

If you pass the `selectedIndex` prop, the child component which matches that index will receive an `active=true` prop when rendering. Use this to show selected state. Before relying on list selection state, though, consider whether your list shouldn't instead be linked to your router, so that each item is a unique route. If you go that direction, you can have the items be `<Route/>` components from React Router, and have them utilize RR's built-in route matching logic to determine rendering appearance.

```
<SidebarList selectedIndex={1}>
  <SidebarListItem>One</SidebarListItem>
  <SidebarListItem>Two</SidebarListItem>
</SidebarList>
```
