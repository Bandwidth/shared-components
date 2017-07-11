Table
=====


Props
-----

Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
children|node||Yes|Render the rows of the Table within its children.
headers|node||Yes|Render headers for the columns with this property.
loading|bool|false|No|[PENDING DEPRECATION] renders the rows as slightly transparent.
className|string|null|No|Adds a class name to the table element.
id|string|null|No|Adds an id to the table element.

Renders a table, using the `children` and `headers` props to define the various table parts. Also accepts `loading` to show a loading state.
