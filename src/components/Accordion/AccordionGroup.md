Creates a group of Accordions which expand mutually exclusively of each other (only one can be open).

Every Accordion must have a `key` prop, which must be unique. You can provide the `startExpandedKey` prop with the key you want to start in the expanded state (defaults to the first one).

```javascript
<AccordionGroup startExpandedKey={3}>
  <Accordion key={0} label="Option 1">Content 1</Accordion>
  <Accordion key={1} label="Option 2">Content 2</Accordion>
  <Accordion key={2} label="Option 2">Content 2</Accordion>
  <Accordion key={3} label="Option 3">Content 3</Accordion>
  <Accordion key={4} label="Option 4">Content 4</Accordion>
  <Accordion key={5} label="Option 5">Content 5</Accordion>
  <Accordion key={6} label="Option 6">Content 6</Accordion>
</AccordionGroup>
```
