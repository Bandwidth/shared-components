```javascript
const lipsum = require('lorem-ipsum');
const content = [
  lipsum({ count: 1 }),
  lipsum({ count: 6 }),
  lipsum({ count: 2, units: 'paragraph' }),
];

class Wrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = { selectedIndex: 0, vertical: props.vertical };
    this.handleSelect = index => {
      this.state.selectedIndex = index;
      this.setState(this.state);
    };
  }

  render() {
    const { Group, Tab, Container } = this.props;

    return (
      <Container>
        <Group
          selectedTabIndex={this.state.selectedIndex}
          onTabSelected={this.handleSelect}
        >
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>A longer tab name!</Tab>
          <Tab disabled>Tab 4</Tab>
        </Group>
        <Tab.Content>{content[this.state.selectedIndex]}</Tab.Content>
      </Container>
    );
  }
}

<div>
  <div>Horizontal tabs:</div>
  <br />
  <Wrapper Group={Tab.Group} Container={Tab.Container} Tab={Tab} />
  <br />
  <div>Vertical tabs:</div>
  <br />
  <Wrapper
    Group={Tab.Group.Vertical}
    Container={Tab.Container.Vertical}
    Tab={Tab.Vertical}
  />
</div>;
```
