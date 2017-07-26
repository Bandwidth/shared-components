SimpleTable
===========


Props
-----

Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
items|array||Yes|An array of data items to use for the rows of the table.
renderRow|func|(item) => (
  <Table.Row key={JSON.stringify(item)}>
    {Object.values(item).map((val) => <Table.Cell>{defaultValueRenderer(val)}</Table.Cell>)}
  </Table.Row>
)|No|Renders a Table.Row that represents a particular item. Row must include an onClick prop for details to work.
(item) => <Row />
renderDetails|func|null|No|Renders the detail view of any item when that item is selected.
columns|arrayOf[object Object]|null|No|An array of column descriptions. Column name should correspond to a key in the data items. displayName is what is actually rendered (defaults to name).
onSortChanged|func|() => null|No|Called when the user changes the sort state of a column. Column name and sort order are passed as params.
(columnName, sortOrder) => void
loading|bool|false|No|Indicates whether the table should render a loading state.

Provides a more straighforward interface for creating a Table which may suit most use cases.

```
<Table.Simple
  items={arrayOfItemData}
  columns={arrayOfColumnData}
  renderRow={functionToRenderARow}
  onSortChanged={functionToHandleSortChanges}
  renderDetails={functionToRenderDetailViewOfRow}
  loading={trueOrFalse}
/>
```
