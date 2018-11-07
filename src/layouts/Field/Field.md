```js
<Field.Group>
  <Field label="label" helpCallout="Some helpful description!">
    <Input id="firstInput" />
  </Field>
  <Field>
    <Toggle description="Toggle me!" />
  </Field>
  <Field label="label">
    <Input />
  </Field>
  <Field label="required:" required={true}>
    <Input />
  </Field>
  <Field label="options" alignContent="left">
    <RadioButton.Group>
      <RadioButton name="example" value="one" label="one" />
      <RadioButton name="example" value="two" label="two" />
      <RadioButton name="example" value="three" label="three" />
      <RadioButton name="example" value="four" label="four" />
    </RadioButton.Group>
  </Field>
  <Field label="tall">
    <TextArea defaultValue="Some basic text" />
  </Field>
</Field.Group>
```

### HTML output & accessibility

Fields produces output which is semantically different from the component structure. In the rendered HTML, React code like this:

```js static
<Field.Group>
  <Field label="foo" helpText="bar">
    <Input />
  </Field>
  <Field label="thud" helpText="baz">
    <Input />
  </Field>
</Field.Group>
```

Actually produces HTML like this:

```html
<div>
  <!-- an auto-generated row element -->
  <div>
    <!-- start of the first field -->
    <label>foo</label>
    <input />
    <div>bar</div>
    <!-- start of the second field -->
    <label>thud</label>
    <input />
    <div>baz</div>
  </div>
</div>
```

To make sure that forms are accessible, Fields supports associating labels with inputs by id. Simply provide an id prop to the content you provide to Field, and an associated `for` attribute will be added to the produced label.

```js static
<Field label="foo">
  <Input id="foo" />
</Field>
```

### Spanning multiple columns

```js
<Field.Group columns={4}>
  <Field label="label" columnSpan={2}>
    <Input />
  </Field>
  <Field>
    <Input />
  </Field>
  <Field>
    <Input />
  </Field>
  <Field label="label" columnSpan={4}>
    <Input />
  </Field>
  <Field>
    <Input />
  </Field>
</Field.Group>
```

### Providing customized label and helpText

```js
<Field.Group columns={1}>
  <Field
    label={<i>This is a customized label</i>}
    helpText={
      <Accordion.Small label="A very customized helptext">
        This probably isn't your use-case
      </Accordion.Small>
    }
  >
    <Input />
  </Field>
  <Field label="Just a regular field">
    <Input />
  </Field>
</Field.Group>
```
