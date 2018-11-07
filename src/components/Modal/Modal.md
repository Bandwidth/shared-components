```javascript
const React = require('react');

class ModalShow extends React.Component {
  constructor(props) {
    this.state = {
      show: false,
    };
  }

  render() {
    const toggle = () => this.setState({ show: !this.state.show });
    return (
      <div>
        <Button onClick={toggle}>toggle</Button>
        {this.state.show && (
          <Modal
            title="Hello"
            actionContent={
              <Button.Secondary onClick={toggle}>Cancel</Button.Secondary>
            }
          >
            <div style={{ fontSize: '72px' }}>
              Hello, here's some modal content.
              <br />
              It's fairly big.
              <br />
              Long enough to hopefully scroll off your screen
              <br />
              By scrolling off the screen, you can see how the action content
              stays at the bottom
              <br />
              Action content is a useful place to put close buttons, submit
              buttons, etc
              <br />
            </div>
          </Modal>
        )}
      </div>
    );
  }
}

<ModalShow />;
```

## Modal with X icon to close

```javascript
const React = require('react');

class ModalShow extends React.Component {
  constructor(props) {
    this.state = {
      show: false,
    };
  }

  render() {
    const toggle = () => this.setState({ show: !this.state.show });
    return (
      <div>
        <Button onClick={toggle}>show</Button>
        {this.state.show && (
          <Modal
            title="Custom buttons"
            onClose={toggle}
            actionContent={<Button onClick={toggle}>OK</Button>}
          >
            <div style={{ fontSize: '72px' }}>
              Hello, here's some modal content.
            </div>
          </Modal>
        )}
      </div>
    );
  }
}

<ModalShow />;
```
