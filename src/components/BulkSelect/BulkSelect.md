```javascript
// you may need to change this to import your theme
const theme = require('../../theme').default;
theme.renderDocumentation('BulkSelect');
```

```javascript
<BulkSelect
  sections={[
    {
      title: 'Section 1',
      items: [
        { data: 'Foo', selected: true },
        { data: 'Bar', selected: false },
      ],
    },
    {
      title: 'Section 2',
      items: [
        { data: 'Baz', selected: false },
        { data: 'Corge', selected: true },
        { data: 'Thud', selected: true },
      ],
    },
  ]}
  renderItem={(item) => item}
  computeItemKey={(item) => item}
/>
```
