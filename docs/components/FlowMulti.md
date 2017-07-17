FlowMulti
=========


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

A helper component to create Redux Form multi-value fields. Supply a `renderField` function prop to render your individual fields, and this component will take care of allowing users to add a new value, delete values, and syncing the values with Redux Form.

`renderField` takes two parameters: `name` and `index`. You can read more in the Redux Form docs.
