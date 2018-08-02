`Breadcrumbs` is intended to hold one or more `Breadcrumb` components.  This provides an easy way to structure
navigation as commonly seen at the top of web pages.

Example:
```jsx harmony
<div style={{display: 'flex'}}>
  <Breadcrumbs>
    <Breadcrumbs.Breadcrumb>
      <Anchor to="https://www.myapp.com/home">Home</Anchor>
    </Breadcrumbs.Breadcrumb>
    <Breadcrumbs.Breadcrumb>
      <Anchor to="https://www.myapp.com/accounts">Accounts</Anchor>
    </Breadcrumbs.Breadcrumb>
    <Breadcrumbs.Breadcrumb>Products</Breadcrumbs.Breadcrumb> {/* User is currently here */}
  </Breadcrumbs>
</div>
```
