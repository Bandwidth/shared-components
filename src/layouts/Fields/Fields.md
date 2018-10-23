Fields does form field layout automatically. Specify the number of columns and column span values for individual fields. The Fields component will handle grouping fields into rows and aligning them automatically.

### Behavior gallery

```js
const longLabel = `a ${new Array(16).fill('very, ').join('')} very long label!`;

<Fields>
  <Fields.Field label="label">
    <Input id="firstInput" />
  </Fields.Field>
  <Fields.Field helpText="some help text" label={longLabel}>
    <Input />
  </Fields.Field>
  <Fields.Field>
    <Toggle description="Toggle me!" />
  </Fields.Field>
  <Fields.Field label="label">
    <Input />
  </Fields.Field>
  <Fields.Field label="required:" required={true}>
    <Input />
  </Fields.Field>
  <Fields.Field>
    <Input />
  </Fields.Field>
  <Fields.Field label="options" alignContent="left">
    <RadioGroup options={['one', 'two', 'three']} />
  </Fields.Field>
  <Fields.Field label="tall">
    <TextArea />
  </Fields.Field>
</Fields>;
```

By default, Fields uses 2 columns.

### HTML output & accessibility

Fields produces output which is semantically different from the component structure. In the rendered HTML, React code like this:

```js static
<Fields>
  <Field label="foo" helpText="bar">
    <Input />
  </Field>
  <Field label="thud" helpText="baz">
    <Input />
  </Field>
</Fields>
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
const Input = require('components/Input').default;

<Fields columns={4}>
  <Fields.Field label="label" columnSpan={2}>
    <Input />
  </Fields.Field>
  <Fields.Field>
    <Input />
  </Fields.Field>
  <Fields.Field>
    <Input />
  </Fields.Field>
  <Fields.Field label="label" columnSpan={4}>
    <Input />
  </Fields.Field>
  <Fields.Field>
    <Input />
  </Fields.Field>
</Fields>;
```

### A field with a fieldSpan too large will wrap to the next row.

```js
const Input = require('components/Input').default;

<Fields columns={6}>
  <Fields.Field label="label" columnSpan={4}>
    <Input />
  </Fields.Field>
  <Fields.Field label="wrapped" columnSpan={3}>
    <Input />
  </Fields.Field>
  <Fields.Field label="label" columnSpan={2}>
    <Input />
  </Fields.Field>
  <Fields.Field label="label" columnSpan={1}>
    <Input />
  </Fields.Field>
</Fields>;
```

### Spacing stress-test

```js
const Input = require('components/Input').default;
const Toggle = require('components/Toggle').default;

const longText = new Array(64).fill('Text').join(' ');

<Fields columns={1}>
  <Fields.Field label="Label">
    <Input />
  </Fields.Field>
  <Fields.Field>
    <Toggle description="description" />
  </Fields.Field>
  <Fields.Field label={longText} helpText={longText}>
    <Input />
  </Fields.Field>
  <Fields.Field>
    <Toggle description="description" />
  </Fields.Field>
</Fields>;
```

### Providing customized label and helpText

```js
const Input = require('components/Input').default;
const Accordion = require('components/Accordion').default;

<Fields columns={1}>
  <Fields.Field
    label={<i>This is a customized label</i>}
    helpText={
      <Accordion.Small label="A very customized helptext">
        This probably isn't your use-case
      </Accordion.Small>
    }
  >
    <Input />
  </Fields.Field>
  <Fields.Field label="Just a regular field">
    <Input />
  </Fields.Field>
</Fields>;
```

### Error test: a field which is too wide for the fieldset

This layout should fail with an error in the console explaining that the field is too wide.

```js
const Input = require('components/Input').default;

<Fields columns={3}>
  <Fields.Field label="too wide" columnSpan={4}>
    <Input />
  </Fields.Field>
  <Fields.Field label="just right" columnSpan={3}>
    <Input />
  </Fields.Field>
  <Fields.Field label="label" columnSpan={2}>
    <Input />
  </Fields.Field>
  <Fields.Field label="label" columnSpan={1}>
    <Input />
  </Fields.Field>
</Fields>;
```

### Providing customized label and helpCallout

```js
const Input = require('components/Input').default;

<Fields columns={1}>
  <Fields.Field
    label={<i>This is a customized label</i>}
    helpCallout="Description"
  >
    <Input />
  </Fields.Field>
  <Fields.Field
    label="Field with required mark and helpCallout"
    required
    helpCallout="Description"
  >
    <Input />
  </Fields.Field>
</Fields>;
```
