```
const theme = require('../../theme').default;
theme.renderDocumentation('Table');
```

```javascript
<Table
  headers={(
    <Table.Row>
      <Table.Header>One</Table.Header>
      <Table.Header>Two</Table.Header>
      <Table.Header sortable>Three</Table.Header>
    </Table.Row>
  )}
>
  <Table.Row>
    <Table.Cell>1</Table.Cell>
    <Table.Cell>Foo</Table.Cell>
    <Table.Cell>Bar</Table.Cell>
  </Table.Row>
  <Table.Row>
    <Table.Cell>2</Table.Cell>
    <Table.Cell>Foo</Table.Cell>
    <Table.Cell>Bar</Table.Cell>
  </Table.Row>
  <Table.Row>
    <Table.Cell>3</Table.Cell>
    <Table.Cell>Foo</Table.Cell>
    <Table.Cell>Bar</Table.Cell>
  </Table.Row>
  <Table.Row>
    <Table.Cell>4</Table.Cell>
    <Table.Cell>Foo</Table.Cell>
    <Table.Cell>Bar</Table.Cell>
  </Table.Row>
</Table>
```

_A small table_

```javascript
<Table.Small
  headers={(
    <Table.Row>
      <Table.Header>One</Table.Header>
      <Table.Header>Two</Table.Header>
      <Table.Header sortable>Three</Table.Header>
    </Table.Row>
  )}
>
  <Table.Row>
    <Table.Cell>1</Table.Cell>
    <Table.Cell>Foo</Table.Cell>
    <Table.Cell>Bar</Table.Cell>
  </Table.Row>
  <Table.Row>
    <Table.Cell>2</Table.Cell>
    <Table.Cell>Foo</Table.Cell>
    <Table.Cell>Bar</Table.Cell>
  </Table.Row>
  <Table.Row>
    <Table.Cell>3</Table.Cell>
    <Table.Cell>Foo</Table.Cell>
    <Table.Cell>Bar</Table.Cell>
  </Table.Row>
  <Table.Row>
    <Table.Cell>4</Table.Cell>
    <Table.Cell>Foo</Table.Cell>
    <Table.Cell>Bar</Table.Cell>
  </Table.Row>
</Table.Small>
```
