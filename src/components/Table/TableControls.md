```
const theme = require('../../theme').default;
theme.renderDocumentation('TableControls');
```

Generally sits above a table. Standardized format of the table name and some common controls.

```javascript
<TableControls
  title="Sample Table"
  enableAdd
  enableDelete
  enableSearch
  onAdd={() => {/* handle it! */}}
  onDelete={() => {/* handle it! */}}
  onSearch={() => {/* handle it! */}}
>
  Some extra top row content
</TableControls>
```
