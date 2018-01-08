An experimental component which just adds some padding around something else, based on some pre-defined sizes our designers like. Since developers end up implementing their own padding a lot, it might be useful to include this generic utility. Hopefully it generalizes well.

You can also specify a custom padding for any side, i.e. \`top="48px"\`. This is probably a bad idea.

```javascript
const Box = ({children}) => <div style={{border: '1px solid black'}}>{children}</div>;
<div>
  <Box><Spacing size="xl"><Box>Extra Large</Box></Spacing></Box>
  <Box><Spacing size="lg"><Box>Large</Box></Spacing></Box>
  <Box><Spacing size="md"><Box>Medium</Box></Spacing></Box>
  <Box><Spacing size="sm"><Box>Small</Box></Spacing></Box>
  <Box><Spacing size="xs"><Box>Extra Small</Box></Spacing></Box>
</div>
```
