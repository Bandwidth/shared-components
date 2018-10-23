RadioGroup is a fully functional input. It generates its own radio buttons from the options you supply. You can use it manually by passing in `value` and `onChange` props. It's a controlled component, so it won\'t update its own value.

```javascript
<div>
  <RadioGroup value="a" name="a" onChange={() => { /* handle it! */ }} options={['a', 'b', 'c', 'd']} />
</div>
```

_With Descriptions_
```javascript
const lipsum = require('lorem-ipsum');

<div>
  <RadioGroup
    value="three"
    name="b"
    onChange={() => { /* handle it! */ }}
    options={{
      one: lipsum(),
      two: lipsum(),
      three: lipsum(),
    }}
  />
</div>
```

_Small Variant_
```javascript
<div>
  <RadioGroup.Small value="d" name="c" onChange={() => { /* handle it! */ }} options={['a', 'b', 'c', 'd']} />
</div>
```

_Large Variant_
```javascript
<div>
  <RadioGroup.Large value="b" name="d" onChange={() => { /* handle it! */ }} options={['a', 'b', 'c', 'd']} />
</div>
```

_Disabled_
```javascript
<div>
  <RadioGroup value="a" name="e" onChange={() => { /* handle it! */ }} options={['a', 'b', 'c']} disabled />
</div>
```
