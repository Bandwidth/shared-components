TableControls
=============


Props
-----

Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
enableDelete|bool|false|No|Show a delete button.
enableAdd|bool|false|No|Show an add button.
enableSearch|bool|false|No|Show a search button.
title|string|null|No|A title to give for the table (optional).
children|node|null|No|Any other things you'd like to render below the title and the main controls.
onDelete|func|() => null|No|Called when the user clicks the delete button.
onAdd|func|() => null|No|Called when the user clicks the add button.
onSearch|func|() => null|No|Called when the user clicks the search button.
className|string|null|No|Adds a class name to the container element.
id|string|null|No|Adds an id to the container element.

Generally sits above a table. Standardized format of the table name and some common controls.

```
<TableControls
  title="Sample Table"
  enableAdd
  enableDelete
  enableSearch
  onAdd={...}
  onDelete={...}
  onSearch={...}
>
  Some extra top row content
</TableControls>
```
