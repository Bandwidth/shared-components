Used alone, RadioButton is functional but not especially useful:

```js
<RadioButton
  label="Super awesome radio button"
  name="s"
  value="a"
/>
```

To join RadioButtons together, use them like you would any `<input type="radio">` with a `name` prop, wrapped in `RadioButton.Group`:

```js
<RadioButton.Group>
  <RadioButton name="example" value="one" label="one" />
  <RadioButton name="example" value="two" label="two" />
  <RadioButton name="example" value="three" label="three" />
  <RadioButton name="example" value="four" label="four">
    With extra content
  </RadioButton>
</RadioButton.Group>
```
