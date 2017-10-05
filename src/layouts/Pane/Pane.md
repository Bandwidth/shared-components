```
const theme = require('../../theme').default;
theme.renderDocumentation('Pane');
```

### The Pane System

```javascript
<Pane.Column>
  <Pane.Row>
    <Pane title="A pane">
      <PaneSection>
        Some content...
      </PaneSection>
      <PaneSection title="More">
        Some more content
      </PaneSection>
    </Pane>
    <Pane>
      Number of panes is up to you.
      <PaneSection title="Sections">
        Number of sections is also up to you.
      </PaneSection>
      <PaneSection title="Titles">
        Titles can be provided to Panes or Sections.
      </PaneSection>
    </Pane>
    <Pane>
      <PaneSection>
        Some content...<br/>
        With multiple lines...
      </PaneSection>
      <PaneSection>
        Some more content
      </PaneSection>
    </Pane>
  </Pane.Row>
  <Pane.Row>
    <Pane>
      Longer columns will extend further
    </Pane>
    <Pane>
      So you can keep...
    </Pane>
    <Pane>
      Going and going<br />
      Going and going<br />
      Going and going<br />
      Going and going<br />
      Going and going<br />
      Going and going<br />
      Going and going<br />
      Going and going<br />
    </Pane>
    <Pane>
      Or not. (Notice the lines)
    </Pane>
  </Pane.Row>
</Pane.Column>
```
