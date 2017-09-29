RadioGroup is a fully functional input. It generates its own radio buttons from the options you supply. You can use it manually by passing in \`value\` and \`onChange\` props. It's a controlled component, so it won\'t update its own value.

```javascript
<div>
  <RadioGroup value="a" onChange={() => { /* handle it! */ }} choices={['a', 'b', 'c', 'd']} />
</div>
```

_Small Variant_
```javascript
<div>
  <RadioGroup.Small value="a" onChange={() => { /* handle it! */ }} choices={['a', 'b', 'c', 'd']} />
</div>
```
