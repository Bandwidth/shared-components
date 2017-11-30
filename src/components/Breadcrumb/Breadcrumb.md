`Breadcrumb` is a single item in a sequence of breadcrumbs, normally seen as navigation at the top of the page.

Although `Breadcrumb` normally contains a link to another layer in the navigation, `Breadcrumb` can contain any manner of content:
```jsx harmony
<Breadcrumbs>
  <Breadcrumb>
    <Anchor to="https://www.bandwidth.com">Anchors are fine</Anchor>
  <Breadcrumb>
  <Breadcrumb>
    <div>You can use divs, too</div>
  </Breadcrumb>
  <Breadcrumb>
    <span>Spans are OK</span>
  </Breadcrumb>
  <Breadcrumb>Plain text also works</Breadcrumb>
</Breadcrumbs>
```
