

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
        {sizes.map((size) =>
          <Section key={size}>
            <P style={{
              fontFamily: theme['bandwidth-shared'].fonts[name],
              fontSize: size,
            }} spacing="lg">ABCDEFGHIJKLMNOPQRSTUVWXYZ</P>
          </Section>
        )}
    </Gutter>
  )
);

const BlueLine = (props) =>
  <div style={{ pointerEvents: 'none', float: 'left', borderBottom: '1px dashed rgba(0, 0, 255, 0.25)', height: '1px', width: '100%', position: 'relative', ...props.style}} />

const RedLine = (props) =>
  <div style={{ pointerEvents: 'none', background: 'rgba(255, 0, 0, 0.25)', height: '1px', width: '100%', ...props.style}} />

const Section = (props) =>
  <Gutter>
    <RedLine />
    <BlueLine style={{top: '30px' }} />
      {props.children}
    <BlueLine style={{bottom: '30px' }} />
    <RedLine />
  </Gutter>

const Space = () => (
  <div>
    <P>
      Text components, like <Code>P</Code>, <Code>H1</Code>, and <Code>H2</Code>, support the <Code>spacing</Code> prop. <Code>spacing</Code> provides a dynamic way to specify the margins around a text component in relationship to the cap and base lines of the outer text. Unlike normal CSS margins, which align to the logical top and bottom of the element, the margins calculated by <Code>spacing</Code> will visually align with the text content itself, leading to a more consistent experience for the user.
    </P>

    <Section>
      <H1 spacing="lg">
        Heading with Spacing Applied
      </H1>
    </Section>

    <Section>
      <H1 spacing="lg">
        ABCDEFGHIJKLMNOPQRSTUVWXYZ
      </H1>
    </Section>

    <Section>
      <H2 spacing="lg">
        ABCDEFGHIJKLMNOPQRSTUVWXYZ
      </H2>
    </Section>

    <Section>
      <H3 spacing="lg">
        ABCDEFGHIJKLMNOPQRSTUVWXYZ
      </H3>
    </Section>

    <Section>
      <H4 spacing="lg">
        ABCDEFGHIJKLMNOPQRSTUVWXYZ
      </H4>
    </Section>

    <Section>
      <H5 spacing="lg">
        ABCDEFGHIJKLMNOPQRSTUVWXYZ
      </H5>
    </Section>

    <Section>
      <P spacing="lg">
        ABCDEFGHIJKLMNOPQRSTUVWXYZ
      </P>
    </Section>

    <Section>
      <P spacing="lg">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </P>
    </Section>

    <Section>
      <P spacing="lg">A line with an <Anchor>inline link</Anchor></P>
    </Section>
  </div>
);

<div>
  <h2>Overpass Typeface</h2>
  <Font name="brand"/>
  <h2>Font sizes</h2>
  <FontSizes name="brand" />
  <h2>Overpass Mono Typeface</h2>
  <Font name="monospace"/>
  <h2>The <Code>spacing</Code> Prop</h2>
  <Space />
</div>
```
