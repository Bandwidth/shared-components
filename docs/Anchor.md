Anchor
======


Props
-----

Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
to|string|'#'|No|A location to link to with this anchor.
children|node|null|No|Rendered contents inside the anchor.
exact|bool|false|No|Anchors pass an 'active' prop to their children when the route matches. This controls whether that is exact matching.
onClick|func|() => null|No|A handler for the anchor's onclick event.
type|enum('text'\|'icon'|'wrap')|null|No|whether the contents should be treated as text (underlined), icon (has specific styling), or 'wrap' (no styling).
className|string|null|No|A class name to pass to the <a> element.
id|string|null|No|An id to pass to the <a> element.

Anchors are meant to be used with React Router v4+. They provide a few features besides styling:

* use the `to` prop instead of `href`; better syntax.
* pass the `exact` prop to indicate that this anchor should only be active when the URL matches exactly.
* any children are passed an `active` prop, which indicates whether the anchor is currently being visited.
* pass `type="icon"` or `type="wrap"` to turn customize text styling within the anchor

```
<Anchor to="/about" exact>Go to About Page</Anchor>
```
