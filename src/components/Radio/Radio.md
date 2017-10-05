```
const theme = require('../../theme').default;
theme.renderDocumentation('Radio');
```

```javascript
<div>
  <Radio description="Check me"/>
  <Radio value={true} description="I'm already checked"/>
  <Radio
    value={true}
    description={
      <div>
        <div>A multi-line</div>
        <div>description</div>
      </div>
    }
  />
  <Radio disabled value={false} description="Can't check this"/>
</div>
```
