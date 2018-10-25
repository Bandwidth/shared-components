#### Uncontrolled (interactive) toggle

```javascript
<div>
  <Toggle value="foo" description="Foo" />
</div>
```

```javascript
<div>
  <Toggle checked value="foo" description="On" />
  <Toggle checked={false} value="bar" description="Off" />
  <Toggle disabled value="baz" description="Disabled" />
  <Toggle checked disabled value="corge" description="Disabled, on" />
</div>
```
