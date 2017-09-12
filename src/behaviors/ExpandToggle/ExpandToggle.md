```
<ExpandToggle
  toggleContent={<Label>Click me</Label>}
  startExpanded={false}
>
  Stuff!
</ExpandToggle>

<ExpandToggle
  isExpanded={true}
  toggleContent={<Label>Won't do anything</Label>}
>
  This one won't toggle, expand state is overridden to true!
</ExpandToggle>
```
