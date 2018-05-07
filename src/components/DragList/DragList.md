```js
  class FruitList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        "Apple",
        "Banana",
        "Lemon",
        "Watermelon"
      ]
    }
  }

  // This function merely swaps the order of the two items in the list.
  onMove(from, to) {
    this.setState(state => {
      const removed = state.items.splice(from, 1);
      state.items.splice(to, 0, removed[0]);
      return state;
    })
  }

  render() {
    return (
      <DragList>
        {this.state.items.map((item, index) =>
          <DragList.Item itemType="fruit" key={item} index={index} onMove={this.onMove.bind(this)}>
            <DragList.Container>{item}</DragList.Container>
          </DragList.Item>
        )}
      </DragList>
    );
  }
}

  <div style={{width: '500px'}}><FruitList /></div>
```
