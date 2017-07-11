AccordionGroup
==============


Props
-----

Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
children|node||Yes|Accordions to render in this group.
startExpandedKey|string|null|No|The key of the accordion (if any) to start in the expanded state.
className|string|null|No|A class name to pass to the accordion group container.
id|string|null|No|An id to pass to the accordion group container

Creates a group of Accordions which expand mutually exclusively of each other (only one can be open).

Every Accordion must have a `key` prop, which must be unique. You can provide the `startExpandedKey` prop with the key you want to start in the expanded state (defaults to the first one).

```
<AccordionGroup startExpandedKey={1}>
  <Accordion key={0} />
  <Accordion key={1} />
</AccordionGroup>
```
