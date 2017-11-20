```javascript
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
    const content = [
      'Tab 1 content',
      'Tab 2 content Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      'Tab 3 content Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' +
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ];

    return (
      <div style={{ padding: '8px 0' }}>
        <TabList vertical={this.state.vertical}>
          <Tabs
            selectedTabIndex={this.state.selectedIndex}
            onTabSelected={this.handleSelect}
          >
            <div>Tab 1</div>
            <div>Tab 2</div>
            <div>Tab 3</div>
            <div disabled>Tab 4</div>
          </Tabs>
          <TabContent>
            {content[this.state.selectedIndex]}
          </TabContent>
        </TabList>
      </div>
    );
  }
}

<div>
    <div>Horizontal tabs:</div>
    <Wrapper/>
    <div>Vertical tabs:</div>
    <Wrapper vertical/>
</div>
```
