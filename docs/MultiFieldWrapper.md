MultiFieldWrapper
=================


Props
-----
Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
fields|shape[object Object]||Yes|
renderField|func||Yes|
label|string|null|No|
helpText|string|null|No|
required|bool|false|No|

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
