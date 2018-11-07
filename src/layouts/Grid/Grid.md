#### Sample `minSize` layout:

```javascript
<Grid minSize="50px">
  {Array.from(Array(20).keys()).map(key => (
    <ToggleButton key={key}>{key + 1}</ToggleButton>
  ))}
</Grid>
```

#### Sample `columns` layout:

```javascript
<Grid columns={5}>
  {Array.from(Array(20).keys()).map(key => (
    <ToggleButton key={key}>{key + 1}</ToggleButton>
  ))}
</Grid>
```
