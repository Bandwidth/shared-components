Provides a more straighforward interface for creating a Table which may suit most use cases.

```
const Table = require('./Table').default;

const arrayOfItemData = [
  { id: 0, a: 'foo', b: 'bar' },
  { id: 1, a: 'foo2', b: 'bar3' },
  { id: 2, a: 'foo3', b: 'bar8' },
  { id: 3, a: 'foo4', b: 'bar9' },
  { id: 4, a: 'foo5', b: 'bar4' },
  { id: 5, a: 'foo6', b: 'bar2' },
  { id: 6, a: 'foo7', b: 'bar7' },
];
const arrayOfColumnData = [
  { name: 'a', displayName: 'A' },
  { name: 'b', displayName: 'B', sortable: true },
];
const functionToRenderARow = (item) => (
  <Table.Row>
    <Table.Cell>{item.a}</Table.Cell>
    <Table.Cell>{item.b}</Table.Cell>
  </Table.Row>
);
const functionToHandleSortChanges = () => {};
const functionToRenderDetailViewOfRow = (item) => (
  <div>{JSON.stringify(item)}</div>
);
const isLoading = false;

<Table.Simple
  items={arrayOfItemData}
  columns={arrayOfColumnData}
  renderRow={functionToRenderARow}
  onSortChanged={functionToHandleSortChanges}
  renderDetails={functionToRenderDetailViewOfRow}
  loading={isLoading}
/>
```
