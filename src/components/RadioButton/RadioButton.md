Used alone, RadioButton is functional but not especially useful:

```js
<RadioButton label="Super awesome radio button" name="s" value="a" />
```

To join RadioButtons together, use them like you would any `<input type="radio">` with a `name` prop, wrapped in `RadioButton.Group`:

```js
<RadioButton.Group>
  <RadioButton name="example" value="one" label="one" />
  <RadioButton name="example" value="two" label="two" />
  <RadioButton name="example" value="three" label="three" />
  <RadioButton name="example" value="four" label="four" />
</RadioButton.Group>
```

#### Description

```js
const lipsum = require('lorem-ipsum');
<RadioButton.Group>
  <RadioButton name="example2" value="one2" label="description #1">
    {lipsum({ count: 3 })}
  </RadioButton>
  <RadioButton disabled name="example2" value="two2" label="description #2">
    {lipsum({ count: 3 })}
  </RadioButton>
</RadioButton.Group>;
```

#### Small

```js
<RadioButton.Group>
  <RadioButton.Small name="example3" value="one3" label="one" />
  <RadioButton.Small name="example3" value="two3" label="two" />
  <RadioButton.Small name="example3" value="three3" label="three" />
</RadioButton.Group>
```

#### Disabled

```js
<RadioButton.Group>
  <RadioButton disabled checked name="example5" value="one5" label="one" />
  <RadioButton disabled name="example5" value="two5" label="two" />
  <RadioButton disabled name="example5" value="three5" label="three" />
</RadioButton.Group>
```
