Our colors are available as part of themes. Use [BandwidthProvider](/#!/BandwidthProvider) to provide themes in your app,
then use the names below with the `themeGet()` function provided by the library.

```javascript
const hexToHSL = require('hex-to-hsl');
const withTheme = require('styled-components').withTheme;

const getLightness = (hex) => hexToHSL(hex)[2]

const Color = ({color, hexColor}) => {
  const bright = getLightness(hexColor) > 45;
  return (
    <div key={color} style={{
      flex: '1',
      flexBasis: 'auto',
      margin: '0',
      padding: '20px 20px',
      color: bright ? 'black' : 'white',
      background: hexColor
    }}>
      <span style={{float: 'left'}}>{color}</span>
      <span style={{float: 'right'}}>{hexColor}</span>
    </div>
  );
}

const ColorGroup = withTheme(({name, theme }) => {
  const colors = theme['bandwidth-shared'].colors[name];
  return (<div>
    <h3>{name.toUpperCase()}</h3>
    <div style={{
      border: '2px solid #272b2d',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap'
    }}>
      {Object.keys(colors)
        .sort((a, b) => {
          const aLight = getLightness(colors[a]);
          const bLight = getLightness(colors[b]);
          return aLight < bLight ? 1 : (aLight > bLight ? -1 : a.localeCompare(b));
        })
        .map(key => <Color key={key} color={`${name}.${key}`} hexColor={colors[key]}/>)}
    </div>
  </div>)
});

<Grid columns={2} gridGap="25px 100px">
  <ColorGroup name="primary"/>
  <ColorGroup name="positive"/>
  <ColorGroup name="negative"/>
  <ColorGroup name="gray"/>
  <ColorGroup name="border"/>
  <ColorGroup name="background"/>
</Grid>

```
