Unlike traditional modal dialogs, Modal doesn't include functionality for closing or opening. It's recommended that you render Modal as a route in your React application with React Router.

Provides `title` prop for adding a title, and `onBlockerClicked` if you want to hook the click event on the shadow 'blocker' element which covers the page.

You can also use the `actionContent` prop to pass in stuff to render which will be fixed to the bottom of the modal. The rest of the content will scroll as it gets too large, but this content will continue to be visible at the bottom. Use this for things like close buttons or confirm buttons, which should always be visible.

```javascript
const React = require('react');
const Button = require('../Button').default;
const Spacing = require('../Spacing').default;

class ModalShow extends React.Component {
  constructor(props) {
    this.state = {
      show: false,
    };
  }

  render() {
    const toggle = () => this.setState({ show: !this.state.show});
    return (
      <div>
        <Button onClick={toggle}>toggle</Button>
        {this.state.show &&
          <Modal title="Hello" actionContent={<Button onClick={toggle}>Close</Button>}>
            <div style={{fontSize: '72px'}}>
              Hello, here's some modal content.<br/>
              It's fairly big.<br/>
              Long enough to hopefully scroll off your screen<br/>
              By scrolling off the screen, you can see how the action content stays at the bottom<br/>
              Action content is a useful place to put close buttons, submit buttons, etc<br/>
            </div>
          </Modal>
        }
      </div>
    )
  }
}

<ModalShow />
```
