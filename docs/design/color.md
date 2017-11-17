Coming soon, here's some colors in the meantime:

```javascript
const colors = [
  '#00bef0',
  '#008db1',
  '#d9f5fc',
  '#004658',
  '#6cbf0d',
  '#5a9f0b',
  '#e9f5db',
  '#a95adf',
  '#e8562e',
  '#b1351e',
  '#fceae6',
  '#ff673c',
  '#f3f3f3',
  '#666',
  '#272B2D',
];

const Colors = () => (
  <div style={{ width: '100%', height: '400px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
    {colors.map(color => <div style={{ flex: '1', flexBasis: '200px', margin: '0', background: color }} />)}
  </div>
);

<Colors />
```
