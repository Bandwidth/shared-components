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
    this.handleSelect = (index) => {
      this.state.selectedIndex = index;
      this.setState(this.state);
    };
  }

  render() {
    const { List, Tab, Container } = this.props;

    return (
      <Container>
        <List
          selectedTabIndex={this.state.selectedIndex}
          onTabSelected={this.handleSelect}
        >
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>A longer tab name!</Tab>
          <Tab disabled>Tab 4</Tab>
        </List>
        <Tabs.Content>
          {content[this.state.selectedIndex]}
        </Tabs.Content>
      </Container>
    );
  }
}

<div>
  <div>Horizontal tabs:</div>
  <br />
  <Wrapper
    List={Tabs}
    Container={Tabs.Container}
    Tab={Tabs.Tab}
  />
  <br />
  <div>Vertical tabs:</div>
  <br />
  <Wrapper
    List={Tabs.Vertical}
    Container={Tabs.Container.Vertical}
    Tab={Tabs.Tab.Vertical}
  />
</div>
```
