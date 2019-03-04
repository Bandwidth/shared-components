```javascript
const Box = ({ children }) => (
  <div style={{ border: '1px solid black' }}>{children}</div>
);
<div>
  <Box>
    <Spacing size="xl">
      <Box>Extra Large</Box>
    </Spacing>
  </Box>
  <Box>
    <Spacing size="lg">
      <Box>Large</Box>
    </Spacing>
  </Box>
  <Box>
    <Spacing size="md">
      <Box>Medium</Box>
    </Spacing>
  </Box>
  <Box>
    <Spacing size="sm">
      <Box>Small</Box>
    </Spacing>
  </Box>
  <Box>
    <Spacing size="xs">
      <Box>Extra Small</Box>
    </Spacing>
  </Box>
</div>;
```
