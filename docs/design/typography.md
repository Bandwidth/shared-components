

```js
const withTheme = require('styled-components').withTheme;

const text = [
  'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  'abcdefghijklmnopqrstuvwxyz',
  '0123456789,.;:\'?!@#%$%&()\"'
];
const sentence = "The quick brown fox jumps over the lazy dog."
const sizes = ['2.5em', '2em', '1.75em', '1.25em', '1.15em', '1em', '0.8em'];

const Font = withTheme(({theme, name}) =>
  (
    <Gutter>
      <Spacing style={{
          fontFamily: theme['bandwidth-shared'].fonts[name],
          fontSize: '1.75em',
        }} >
          {text.map(t => <div key={t}>{Array.from(t).join('\n')}</div>)}
        </Spacing>
    </Gutter>
  )
);

const FontSizes = withTheme(({theme, name}) =>
  (
    <Gutter>
      <Spacing>
        {sizes.map((size) =>
          <div key={size}>
            <div style={{
              fontFamily: theme['bandwidth-shared'].fonts[name],
              fontSize: size,
            }}>{sentence}</div>
            <HelpText style={{fontSize: "1.15em"}}>{size}</HelpText>
            <br />
          </div>)}
      </Spacing>
    </Gutter>
  )
);

<div>
  <h2>Brand Typeface</h2>
  <Font name="brand"/>
  <h2>Font sizes</h2>
  <FontSizes name="brand" />
  <h2>Monospace Typeface</h2>
  <Font name="monospace"/>
</div>
```
