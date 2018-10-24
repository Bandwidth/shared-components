`Breadcrumb` is a single item in a sequence of breadcrumbs, normally seen as navigation at the top of the page.

`Breadcrumb` is not so useful on its own, but if you combine a few of them within a `Breadcrumb.Group`, you get a nice layout.

Although `Breadcrumb` normally contains a link to another layer in the navigation, `Breadcrumb` can contain any manner of content:

```jsx harmony
<div style={{display: 'flex'}}>
  <Breadcrumb.Group>
    <Breadcrumb>
      <Link to="https://www.bandwidth.com">Links are fine</Link>
    </Breadcrumb>
    <Breadcrumb>
      <div>You can use divs, too</div>
    </Breadcrumb>
    <Breadcrumb>
      <span>Spans are OK</span>
    </Breadcrumb>
    <Breadcrumb>Plain text also works</Breadcrumb>
  </Breadcrumb.Group>
</div>
```
