Our colors are available as part of themes. Use [BandwidthProvider](/#!/BandwidthProvider) to provide themes in your app,
then use CSS variables to reference the colors (e.g.,  `var(--colors-primary-light)`).

```javascript
const hexToHSL = require('hex-to-hsl');
const irisTheme = require('theme/irisTheme');
const {cssvarKey} = require('theme/cssvars');

const getLightness = (hex) => hexToHSL(hex)[2]

const Color = ({color, hexColor}) => {
  const bright = getLightness(hexColor) > 45;
  return (
    <div key={color} style={{
      flex: '1',
      flexBasis: 'auto',
      margin: '0',
      padding: '15px',
      color: bright ? 'black' : 'white',
      background: `var(${color})`
    }}>
      <span style={{float: 'left'}}>{color}</span>
    </div>
  );
}

const ColorGroup = ({name}) => {
  const colors = irisTheme.colors[name];
  return (<div>
    <h3>{name.toUpperCase()}</h3>
    <div style={{
      border: '1px solid #272b2d',
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
        .map(key => <Color key={key} color={cssvarKey(`colors.${name}.${key}`)} hexColor={colors[key]}/>)}
    </div>
  </div>)
}

<Grid columns={2} gridGap="25px 100px">
  <ColorGroup name="primary"/>
  <ColorGroup name="positive"/>
  <ColorGroup name="negative"/>
  <ColorGroup name="gray"/>
  <ColorGroup name="border"/>
  <ColorGroup name="background"/>
</Grid>

```
