Fields does form field layout automatically. Specify the number of columns and column span values for individual fields. The Fields component will handle grouping fields into rows and aligning them automatically.

### Behavior gallery

```js
const Input = require('../../components/Input').default;
const Toggle = require('../../components/Toggle').default;
const RadioGroup = require('../../components/RadioGroup').default;
const TextArea = require('../../components/TextArea').default;

const longLabel = `a ${(new Array(16).fill('very, ').join(''))} very long label!`;

<Fields>
  <Fields.Field label="label"><Input id="firstInput"/></Fields.Field>
  <Fields.Field helpText="some help text" label={longLabel}><Input /></Fields.Field>
  <Fields.Field><Toggle description="Toggle me!" /></Fields.Field>
  <Fields.Field label="label"><Input /></Fields.Field>
  <Fields.Field><Input /></Fields.Field>
  <Fields.Field><Input /></Fields.Field>
  <Fields.Field label="options" alignContent="left">
    <RadioGroup options={['one', 'two', 'three']} />
  </Fields.Field>
  <Fields.Field label="tall">
    <TextArea />
  </Fields.Field>
</Fields>
```

By default, Fields uses 2 columns.

### HTML output & accessibility

Fields produces output which is semantically different from the component structure. In the rendered HTML, React code like this:

```js static
<Fields>
  <Field label="foo" helpText="bar"><Input /></Field>
  <Field label="thud" helpText="baz"><Input /></Field>
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
<Field label="foo"><Input id="foo" /></Field>
```

### Spanning multiple columns

```js
const Input = require('../../components/Input').default;

<Fields columns={4}>
  <Fields.Field label="label" columnSpan={2}><Input /></Fields.Field>
  <Fields.Field><Input /></Fields.Field>
  <Fields.Field><Input /></Fields.Field>
  <Fields.Field label="label" columnSpan={4}><Input /></Fields.Field>
  <Fields.Field><Input /></Fields.Field>
</Fields>
```
