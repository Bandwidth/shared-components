SidebarList
====

      
Lays out items vertically and provides selection context. Does not do scrolling.

If you pass the `selectedIndex` prop, the child component which matches that index will receive an `active=true` prop when rendering. Use this to show selected state. Before relying on list selection state, though, consider whether your list shouldn't instead be linked to your router, so that each item is a unique route. If you go that direction, you can have the items be `<Route/>` components from React Router, and have them utilize RR's built-in route matching logic to determine rendering appearance.

```
<SidebarList selectedIndex={1}>
  <SidebarListItem>One</SidebarListItem>
  <SidebarListItem>Two</SidebarListItem>
</SidebarList>
```
