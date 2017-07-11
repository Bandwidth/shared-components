MultiFieldWrapper
=================


Props
-----

Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
fields|shape[object Object]||Yes|redux-form defined fields object.
renderField|func||Yes|Function which renders a field. Function signature is (name, index) => field
label|string|null|No|Contents of the label above the fields.
helpText|string|null|No|Contents of the help text below the fields.
required|bool|false|No|Indicates whether this value is required for form submission.
id|string||No|Adds an id to the container element.
className|string||No|Adds a class name to the container element.

# MultiFieldWrapper

Provides a way to wrap a field for usage in a Redux Form FieldArray. Hooks into functions on the provided `fields` prop to manipulate its parent array of fields using some rendered controls.

Example usage:

```
export default class MultiTextInput extends React.Component {
  renderField = (name, index) => (
    <Field
      component={TextBox}
      name={name}
    />
  );

  render() {
    return (
      <MultiFieldWrapper
        name={this.props.name}
        fields={this.props.fields}
        renderField={this.renderField}
        label={this.props.label}
        helpText={this.props.helpText}
        required={this.props.required}
      />
    );
  }
}
```
