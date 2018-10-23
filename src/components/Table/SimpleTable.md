`Table.Simple` is meant to provide a quick but limited implementation of a table with sorting and details support. `Table.Simple` doesn't implement sorting internally (you must do this), but does provide props you can utilize to key on sorting events.

```javascript
const data = [
  { foo: 'bar', bar: 0, baz: { corge: 'bop' } },
  { foo: 'bar2', bar: 3, baz: { iffy: 'plink' } },
  { foo: 'bar3', bar: -2, baz: { pie: 'crom' } },
  { foo: 'bar4', bar: 20, baz: { af: 'ib' } },
  { foo: 'bar5', bar: -3, baz: { wef: 'wvew' } },
  { foo: 'bar6', bar: 22, baz: { zet: 'avf' } },
  { foo: 'bar7', bar: 1, baz: { yui: 'asdf' } },
  { foo: 'bar8', bar: 9, baz: { shew: 'vzx' } },
  { foo: 'bar9', bar: 13, baz: { bizt: 'wrag' } },
  { foo: 'bar10', bar: 18, baz: { wump: 'zgze' } },
  { foo: 'bar11', bar: -88, baz: { oppo: 'awerga' } },
  { foo: 'bar12', bar: 31, baz: { indi: 'asdfac' } },
  { foo: 'bar13', bar: 56, baz: { rib: 'ioo' } },
  { foo: 'bar14', bar: -2, baz: { quo: 'uiio' } },
];

const columns = [
  { name: 'foo', sortable: true },
  { name: 'bar', sortable: true },
  { name: 'baz' },
];

const renderRow = (item) => (
  <Table.Row>
    <Table.Cell>{item.foo}</Table.Cell>
    <Table.Cell><Money value={item.bar} /></Table.Cell>
    <Table.Cell>{JSON.stringify(item.baz)}</Table.Cell>
  </Table.Row>
);

<Table.Simple
  items={data}
  columns={columns}
  renderRow={renderRow}
  renderDetails={(item) => <Spacing>{JSON.stringify(item, null, '\t')}</Spacing>}
/>
```
