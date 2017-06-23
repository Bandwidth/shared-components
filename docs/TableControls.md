TableControls
=============


Props
-----
Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
enableDelete|bool|false|No|
enableAdd|bool|false|No|
enableSearch|bool|false|No|
title|string|null|No|
children|node|null|No|
onDelete|func|() => null|No|
onAdd|func|() => null|No|
onSearch|func|() => null|No|

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
