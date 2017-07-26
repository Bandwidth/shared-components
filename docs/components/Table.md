Table
=====


Props
-----

Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
children|node||Yes|Render the rows of the Table within its children.
headers|node|null|No|Render headers for the columns with this property.
loading|bool|false|No|Renders a loading spinner over the table body.
className|string|null|No|Adds a class name to the table element.
id|string|null|No|Adds an id to the table element.
wrapBody|bool|true|No|Whether to wrap the passed children in a <Table.Body>. Defaults true.

Renders a table, using the `children` and `headers` props to define the various table parts. Also accepts `loading` to show a loading state.
