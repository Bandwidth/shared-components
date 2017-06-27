Callout
=======


Props
-----

Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
delay|number|200|No|Miliseconds to wait before showing the callout.
children|node||Yes|Elements to render which will activate the callout on hover.
content|node||Yes|Content to render inside the callout itself.
className|string|null|No|A class name to pass to the callout activation area container.
id|string|null|No|An id to pass to the callout activation area container.

Renders a flyout on hover which can display helpful contextual information to the user.

```
<Callout content="hi there">
  <Button>Hover me</Button>
</Callout>
```
