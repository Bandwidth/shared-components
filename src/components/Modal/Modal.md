## Comprehensive Modal
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
            title="Comprehensive Modal"
            actionContent={
              <Horizontal spacing="md" style={{ alignItems: 'center'}}>
              <Link icon="delete" onClick={toggle}>Cancel</Link>
              <Button.Secondary onClick={toggle}>Back</Button.Secondary>
              <Button onClick={toggle}>Continue</Button>
              </Horizontal>
            }
          >
            <div style={{ fontSize: '14px' }}>
              <H2>Modal Description</H2>
              This modal displays the intended use case.
              <br />
              H2 should be the largest header used in a Modal.
              <br />
              There should be a maximum of 1 primary button, 1 secondary button
              and one anchor link (for destructive items like cancel)
            </div>
          </Modal>
        )}
      </div>
    );
  }
}

<ModalShow />;
```
## Modal with large text
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
