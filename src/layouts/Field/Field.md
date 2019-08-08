## Rules of Field

Rules and conventions for using Field:

1. Multiple fields must be wrapped in Field.Group
2. Only Fields go in Field.Group. Submit buttons, paragraph descriptions, headings, and other non-field components should be placed outside of Field.Group.
3. All field rows have a minimum height of 53px for content, plus space for a label. There are only two exceptions:
   1. If a row of Fields doesn't contain any labels, the empty space above it may be larger than normal. In such cases, you may use the `noLabel` prop on the affected Fields to collapse the label space.
   2. If a row of Fields is composed of field components which are less than 53px tall, the row may be spaced incorrectly in relation to rows above or below it. In such cases, you may use the `short` prop on the affected Fields to fix the vertical spacing.

## Fields Example

```js
<Field.Group>
  <Field label="label" helpCallout="Some helpful description!">
    <Input id="firstInput" />
  </Field>
  <Field alignContentVertically="center">
    <Toggle description="Toggle me!" />
  </Field>
  <Field label="another label">
    <Input />
  </Field>
  <Field label="required:" required={true} helpText="You need this one">
    <Input />
  </Field>
  <Field label="options" alignContent="left"  alignContentVertically="bottom">
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
  <Field label="long field" columnSpan={2}>
    <Input placeholder="Fields can span columns" />
  </Field>
</Field.Group>
```

## Labels and Accessibility

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

## Providing customized label and helpText

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
