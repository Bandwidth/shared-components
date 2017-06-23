Checkbox
====

      
A simple checkbox input. The default export is the label to use.

Also exports `HiddenInput`, which is the actual <input> element.

It's probably easier to use `fields/CheckboxField`, which assembles these for you.

```
<HiddenInput value={true} id="a" />
<Checkbox for="a" />
```
