Navigation
==========


Props
-----

Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
title|string|null|No|The title to render within the navigation header (optional)
links|custom||No|A list of links to include in the main navigation.
topLinks|custom|null|No|A list of links to include above the main links (optional).
className|string|null|No|Adds a class name to the element.
id|string|null|No|Adds an id to the element.

The header above a page which contains page title and navigation.

```
<Navigation
  title="Bandwidth App"
  links={[
    { to: '/cat', exact: true, content: 'Cat' },
    { to: '/anotherCat', content: 'Another Cat' },
  ]}
  topLinks={[
    { to: '/submitCat', content: 'Submit Cat' },
    { to: '/logout', content: 'Log Out' },
  ]}
/>
```
