Money
=====


Props
-----

Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
value|union(string\|number)|0|Yes|The monetary value to show.
showSign|bool|true|No|Whether or not to show a +/- sign before the amount (defaults true)
className|string|null|No|Adds a class name to the element.
id|string|null|No|Adds an id to the element.

The Money component renders a monetary value with a color and sign to indicate positive or negative. It formats decimal values and adds a $ to the beginning, so just pass in the raw number/string value for `value`. Use the `showSign` prop to turn off the plus/minus sign.

```
<Money value="0.33224" />
```
