```javascript
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
  <Radio name="radios" value="four" disabled description="Four" />
  <Button.Submit>Show value</Button.Submit>
</form>
```
