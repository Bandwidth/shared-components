```javascript
<div>
  <Radio value="a" description="Check me"/>
  <Radio value="foo" checked description="I'm already checked"/>
  <Radio
    value="bar"
    checked
    description={
      <div>
        <div>A multi-line</div>
        <div>description</div>
      </div>
    }
  />
  <Radio disabled value="hello" description="Can't check this"/>
</div>
```

Radios assembled in a single field:

```javascript
const Button = require('../Button').default;

<form
  onSubmit={ev => {
    ev.preventDefault();
    // normally in React you'd use managed state to determine checked value
    const value = document.querySelector('input[name="radios"]:checked').value;
    alert(value);
  }}
>
  <Radio name="radios" value="one" description="One" />
  <Radio name="radios" value="two" description="Two" />
  <Radio name="radios" value="three" checked description="Three" />
  <Button.Submit>Show value</Button.Submit>
</form>

```
