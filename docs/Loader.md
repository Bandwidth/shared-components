Loader
======


Props
-----

Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
size|string|'20px'|No|The size of each loader 'dot'. Can be any CSS dimension string.
color|string|null|No|The color of the loader. Defaults to the primary theme color.
className|string|null|No|Adds a class name to the element.
id|string|null|No|Adds an id to the element.

Drop a loader anywhere you want to display a loading animation. It should self-center in a flexbox.

Use the `size` prop to pass a custom dot size, `color` to override the color.

```
<Loader size="20px" />
```
