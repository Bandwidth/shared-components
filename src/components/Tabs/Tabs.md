Tab components provide visual rendering blocks of a tabbed layout. It's up to you to implement the logic behind rendering tabbed content.

To keep things visually consistent and connected, utilize the `Tabs.Container` component as a wrapper around a `Tabs` and `Tabs.Content` component. This helps align the borders of the components so that they are rendered correctly.

`Tabs` itself is a convenience component building on top of the `TabList` visual component (which can be imported from `components/Tabs/styles/TabList`). It provides a customized `onClick` handler to child `Tab` components and uses its own `onTabSelected` and `selectedTabIndex` props to give you a convenient and centralized place to keep track of tab state. If you'd prefer to do your own logic, you can just wrap `Tabs.Tab` components with the previously mentioned `TabList` component for rendering purposes.

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
