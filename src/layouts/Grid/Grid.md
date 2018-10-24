**Grid** utilizes CSS grid to provide some basic grid functionality without needing to delve into CSS. Typical usage will either provide `minSize` to set the minimum size of each column, which will then be auto fit into rows and wrap, or will provide `columns` and allow the size of each column to automatically be determined based on the available space.

**NOTE:** If `columns` is unchanged or set to `'auto-fill'` or `'auto-fit'`, then `minSize` must be set.

Sample `minSize` layout:

```javascript
<Grid minSize="50px">
  {Array.from(Array(20).keys()).map(key => (
    <ToggleButton key={key}>{key + 1}</ToggleButton>
  ))}
</Grid>
```

Sample `columns` layout:

```javascript
<Grid columns={5}>
  {Array.from(Array(20).keys()).map(key => (
    <ToggleButton key={key}>{key + 1}</ToggleButton>
  ))}
</Grid>
```
