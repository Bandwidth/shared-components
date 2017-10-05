```
const theme = require('../../theme').default;
theme.renderDocumentation('AccordionGroup');
```

Creates a group of Accordions which expand mutually exclusively of each other (only one can be open).

Every Accordion must have a \`key\` prop, which must be unique. You can provide the \`startExpandedKey\` prop with the key you want to start in the expanded state (defaults to the first one).

```
<AccordionGroup startExpandedKey={1}>
  <Accordion key={0} label="Option 1"/>
  <Accordion key={1} label="Option 2"/>
</AccordionGroup>
```
