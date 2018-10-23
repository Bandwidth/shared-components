Form is a slightly modified version of `<form>`. Use it to create forms
that users can use to submit data.

```javascript
<Form
  onSubmit={e => {
    e.preventDefault(); //Prevent the default form submission behavior.
    // Do something interesting
  }}
>
  <Fields columns={1}>
    <Field label="Username:">
      <Input />
    </Field>
    <Field label="Password:">
      <Input type="password" />
    </Field>
    <Field>
      <div>
        <Button.Submit>Submit</Button.Submit>
      </div>
    </Field>
  </Fields>
</Form>
```
