```
const theme = require('../../theme').default;
theme.renderDocumentation('CodeContainer');
```

When you want to make a big block of code which contains multiple elements (including non-code labels), this component can wrap everything with a nice consistent background and foreground.

Also allows a header to be rendered above.

```
<CodeContainer header="Awesome Code Container">
  <CodeBlock>some thing;</CodeBlock>
  <h3>a label for next thing</h3>
  <CodeBlock>some other thing;</CodeBlock>
</CodeContainer>
```
