NavigationItems
===============


Props
-----

Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
links|custom|[]|No|Links to render in the list.
className|string|null|No|Adds a class name to the link container element.
id|string|null|No|Adds an id to the link container element.

Helper to generate a list of navigation items.

```
<NavigationItems
  links={[
    { to: '/cat', exact: true, content: 'Cat' },
    { to: '/anotherCat', content: 'Another Cat' },
  ]}
/>
```
