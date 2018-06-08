Fields does form field layout automatically. Specify the number of columns and column span values for individual fields. The Fields component will handle grouping fields into rows and aligning them automatically.

> Note: Fields is based on the [field-day](https://github.com/a-type/field-day) React library.

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
  <Fields.Field alignContent="right" alignContentVertically="center"><Toggle description="Toggle me!" /></Fields.Field>
  <Fields.Field label="label"><Input /></Fields.Field>
  <Fields.Field label="required:"><Input required /></Fields.Field>
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

### Props

**Group Props**

```js
const Table = require('../../components/Table').default;

const headers = ['Prop name', 'type', 'default', 'description'];
const rows = [
  ['columns', 'number', '2', 'The number of columns in the field layout'],
  ['id', 'string', 'null', 'An id to assign to the group element'],
  ['className', 'string', 'field-group', 'A class name to assign to the group element'],
  ['style', 'object', '{}', 'Style overrides for the group element'],
];

<Table.Small>
  <Table.Row>{headers.map(header => <Table.Header key={header}>{header}</Table.Header>)}</Table.Row>
  {rows.map((row, idx) => (<Table.Row key={idx}>{row.map(item => <Table.Cell key={item}>{item}</Table.Cell>)}</Table.Row>))}
</Table.Small>
```

**Field Props**

```js
const Table = require('../../components/Table').default;

const headers = ['Prop name', 'type', 'default', 'description'];
const rows = [
  ['label', 'string | node | func', 'null', 'A label for the field'],
  ['helpText', 'string | node | func', 'null', 'Help text for the field'],
  ['required', 'bool', 'false', 'Whether the field is required (affects label render)'],
  ['columnSpan', 'number', '1', 'How many columns the field should take up'],
  ['contentHorizontalAlign', 'string', 'left', 'How content should align horizontally'],
  ['contentVerticalAlign', 'string', 'top', 'How content should align vertically'],
  ['alignContent', 'string', 'left', 'Alias for contentHorizontalAlign'],
  ['alignContentVertically', 'string', 'top', 'Alias for contentVerticalAlign'],
  ['labelHorizontalAlign', 'string', 'left', 'How the label should align horizontally'],
  ['labelVerticalAlign', 'string', 'bottom', 'How the label should align vertically'],
  ['helpTextHorizontalAlign', 'string', 'left', 'How the help text should align horizontally'],
];

<Table.Small>
  <Table.Row>{headers.map(header => <Table.Header key={header}>{header}</Table.Header>)}</Table.Row>
  {rows.map((row, idx) => (<Table.Row key={idx}>{row.map(item => <Table.Cell key={item}>{item}</Table.Cell>)}</Table.Row>))}
</Table.Small>
```

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
  <!-- start of the first field -->
  <label>foo</label>
  <input />
  <div>bar</div>
  <!-- start of the second field -->
  <label>thud</label>
  <input />
  <div>baz</div>
</div>
```

To make sure that forms are accessible, Fields supports associating labels with inputs by id. Simply provide an id prop to the content you provide to Field, and an associated `for` attribute will be added to the produced label.

```js static
<Field label="foo"><Input id="foo" /></Field>
```

If you can't supply an `id` prop to the root content component, you can also supply `fieldId` to the Field itself.

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

### A field with a fieldSpan too large will wrap to the next row.

```js
const Input = require('../../components/Input').default;

<Fields columns={6}>
  <Fields.Field label="label" columnSpan={4}><Input /></Fields.Field>
  <Fields.Field label="wrapped" columnSpan={3}><Input /></Fields.Field>
  <Fields.Field label="label" columnSpan={2}><Input /></Fields.Field>
  <Fields.Field label="label" columnSpan={1}><Input /></Fields.Field>
</Fields>
```

### A note about HelpText

The `helpText` prop is just a shortcut to place a `HelpText` element below the field content. Help text is not aligned in its own row like labels are, on purpose. If you had a textarea in one column, for instance, you wouldn't want the help text in the column next to it to vertically align to the bottom of the adjacent textarea; you would want it to align to the bottom of its own content element.

### Group spacing

There is a large spacing margin below the field group when it's rendered. This is meant to flow well into other content. It also allows you to stack two sets of FieldGroups above each other with no extra code and get seamless spacing.

### Spacing stress-test

```js
const Input = require('../../components/Input').default;
const Toggle = require('../../components/Toggle').default;

const longText = new Array(64).fill('Text').join(' ');

<Fields columns={1}>
  <Fields.Field label="Label"><Input /></Fields.Field>
  <Fields.Field><Toggle description="description" /></Fields.Field>
  <Fields.Field label={longText} helpText={longText}><Input /></Fields.Field>
  <Fields.Field><Toggle description="description" /></Fields.Field>
</Fields>
```

### Providing customized label and helpText

```js
const Input = require('../../components/Input').default;
const Accordion = require('../../components/Accordion').default;

<Fields columns={1}>
  <Fields.Field
    label={<i>This is a customized label</i>}
    helpText={<Accordion.Small label="A very customized helptext">This probably isn't your use-case</Accordion.Small>}
  >
    <Input />
  </Fields.Field>
  <Fields.Field label="Just a regular field">
    <Input />
  </Fields.Field>
</Fields>
```

### Error test: a field which is too wide for the fieldset

This layout should fail with an error in the console explaining that the field is too wide.

```js
const Input = require('../../components/Input').default;

<Fields columns={3}>
  <Fields.Field label="too wide" columnSpan={4}><Input /></Fields.Field>
  <Fields.Field label="just right" columnSpan={3}><Input /></Fields.Field>
  <Fields.Field label="label" columnSpan={2}><Input /></Fields.Field>
  <Fields.Field label="label" columnSpan={1}><Input /></Fields.Field>
</Fields>
```
