Form
====

      
# Form

Form is a smart layout component. It tries its best to lay out any Input components you place within it in a reasonable way. There are two ways to put Inputs in forms:

1. 'Loose' inputs, placed directly in the form. The form will attempt to size these inputs to half the total width of the form.

2. FieldGroups, which take up a full row in the form, and can align / size their child inputs however they want using FlexBox.

Regardless of whether Inputs are 'loose' or inside a FieldGroup, the Form will try to put the proper padding between them and ensure that the outside edges are not padded.

```
<FormBox>
  <Form>
    <TextInput />
    <TextInput />
    <FieldGroup>
      <ButtonInput />
      <LinkInput />
    </FieldGroup>
  </Form>
</FormBox>
```
