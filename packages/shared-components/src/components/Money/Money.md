The Money component renders a monetary value with a color and sign to indicate positive or negative. It formats decimal values and adds a $ to the beginning, so just pass in the raw number/string value for `value`. Use the `showSign` prop to turn off the plus/minus sign.

```javascript
<Money value="0.33224" />
```

**Negative Value**
```javascript
<Money value="-0.33224" />
```

**Trailing Zeroes String**
```javascript
<Money value="-0.8943424000" />
```

**Round Value**
```javascript
<Money value="3" />
```

**Semi-Round Value**
```javascript
<Money value="3.2" />
```

**Number Value**
```javascript
<Money value={3.044688238111120000} />
```

**Round Number Value**
```javascript
<Money value={-2} />
```
