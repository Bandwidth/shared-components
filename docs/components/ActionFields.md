ActionFields
====

      
# ActionFields

ActionFields is a layout container for that last row of buttons and links in a form. You know the one. They're all aligned in a particular way. You could achieve this with some fiddling and a FieldGroup, but why not just include a more convenient component for it?

You can pass `left|right|center|outside` to the `'align'` prop to switch the alignment.

Alignment `'left'` will reverse the order of elements, so you can switch easily between left and right.

```
<Form>
  <Field component={TextField} label="name" />
  <ActionFields>
    <LinkField>Cancel</LinkField>
    <ButtonField type="submit">Save</ButtonField>
  </ActionFields>
</Form>
```
