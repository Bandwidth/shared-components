```
const theme = require('../../theme').default;
theme.renderDocumentation('SubmitButton');
```

`SubmitButton` is intended to be used within a Form (most commonly a redux-form). `SubmitButton` should only be used to represent a button that triggers the `onSubmit` actions (do not use for standard actions or cancellation).


**Default state**
```
<SubmitButton>
    Action
</SubmitButton>
```

**On Submit / Loading:**
```
<SubmitButton loading>
    Action
</SubmitButton>
```
