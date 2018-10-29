#### Deprecated

> This component is no longer supported from this library. It should be fairly easy to implement within your app, though.

Use this to annotate URLs with the method which is used to access them (for instance, in API docs). It will automatically choose a color based on the contents of the component, so use `GET`, `POST` inside, etc.

```javascript
<div>
  <MethodTag>POST</MethodTag>
  <MethodTag>GET</MethodTag>
  <MethodTag>PUT</MethodTag>
  <MethodTag>DEL</MethodTag>
</div>
```
