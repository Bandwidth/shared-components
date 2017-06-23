Anchor
====

      
Anchors are meant to be used with React Router v4+. They provide a few features besides styling:

* use the `to` prop instead of `href`; better syntax.
* pass the `exact` prop to indicate that this anchor should only be active when the URL matches exactly.
* any children are passed an `active` prop, which indicates whether the anchor is currently being visited.
* pass `type="icon"` or `type="wrap"` to turn customize text styling within the anchor

```
<Anchor to="/about" exact>Go to About Page</Anchor>
```
