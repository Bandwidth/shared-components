Navigation
==========


Props
-----

Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
title|string|null|No|
links|custom||No|
topLinks|custom|null|No|

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
