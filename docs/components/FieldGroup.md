FieldGroup
====

      
# FieldGroup

For when you know how you want to lay out fields in a form on one row. For instance, if the first name and last name field need to be on the same row, you'd use a FieldGroup to join them. You can pass props for arrangement:

* `spacing`: a single value to set the `flex` CSS property of every item, or an array to set them individually.
* `align`: a verbatim value for `justify-content` on the enclosing flexbox.

```
<FieldGroup spacing={[2, 1]} align="space-between">
  <TextField />
  <ButtonField />
</FieldGroup>
```
