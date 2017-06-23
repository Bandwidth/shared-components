NavigationItems
===============


Props
-----
Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
links|custom|[]|No|

Helper to generate a list of navigation items.

```
<NavigationItems
  links={[
    { to: '/cat', exact: true, content: 'Cat' },
    { to: '/anotherCat', content: 'Another Cat' },
  ]}
/>
```
