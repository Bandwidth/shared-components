```javascript
const Button = require('../Button').default;

class ShowToast extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  render() {
    const { show } = this.state;

    return (
      <div>
        <Button onClick={() => this.setState({ show: !show })}>Toggle Show</Button>
        {show && <Toast>Hello there!</Toast>}
      </div>
    )
  }
}

<ShowToast />
```
