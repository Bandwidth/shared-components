Anchors are meant to be used with React Router v4+.

Anchors infer their type from their contents. To override type, use the `type` prop. Anchors which enclose another component besides Icon are assumed to be 'transparent' (non-styled) wrap type. If your anchor is not visible, try providing an explicit type.

Available variants:

* `Anchor.Negative` (aka `Anchor.Danger`)
* `Anchor.Positive`
* `Anchor.Dark`
* `Anchor.Inverted`

```javascript
<Anchor to="/about">Text!</Anchor>
```

_An icon anchor_
```javascript
<Anchor to="#bar" icon="openInWindow" />
```

_An old-style icon anchor_: this kind of icon anchor is not recommended anymore; use the `icon` prop on an empty anchor instead.
```javascript
const Icon = require('../Icon').default;
<Anchor to="#bar"><Icon name="moderator"/></Anchor>
```

_Text and icon_
```javascript
const Icon = require('../Icon').default;
<Anchor to="#bar" type="text"><Icon name="help" /> Learn more about this</Anchor>
```

_New tab link_
```javascript
<Anchor to="https://google.com" newTab>Google</Anchor>
```

_"Combo" anchor for toolbar functions_
```javascript
<Anchor icon="delete3">delete</Anchor>
```

_Overriding the anchor type (forcing a text anchor to render as a wrap anchor)_
```javascript
<Anchor type="wrap">Regular text</Anchor>
```

_A negative anchor_
```javascript
<Anchor.Negative to="#foo">Yikes!</Anchor.Negative>
```

_A negative icon anchor_
```javascript
<Anchor.Negative to="#foo" icon="delete3" />
```

_A negative "combo" anchor_
```javascript
<Anchor.Negative to="#foo" icon="unicorn">Unicorns</Anchor.Negative>
```

_A positive anchor_
```javascript
<Anchor.Positive to="#foo">Stay posi</Anchor.Positive>
```

_A positive icon anchor_
```javascript
<Anchor.Positive icon="cat" />
```

_A positive "combo" anchor_
```javascript
<Anchor.Positive icon="expensive2">Cash</Anchor.Positive>
```

_A dark anchor_
```javascript
<Anchor.Dark to="#foo">Go somewhere</Anchor.Dark>
```

_A dark icon anchor_
```javascript
<Anchor.Dark icon="moderator" />
```

_A dark "combo" anchor_
```javascript
<Anchor.Dark icon="courses">Read some books</Anchor.Dark>
```

_An inverted anchor_
```javascript
<div style={{ background: '#004658', padding: '8px' }}>
  <Anchor.Inverted to="#foo">Stay posi</Anchor.Inverted>
</div>
```

_An inverted icon anchor_
```javascript
<div style={{ background: '#004658', padding: '8px' }}>
  <Anchor.Inverted icon="file" />
</div>
```

_An inverted "combo" anchor_
```javascript
<div style={{ background: '#004658', padding: '8px' }}>
  <Anchor.Inverted icon="loginRounded">Login</Anchor.Inverted>
</div>
```
