A collection of items which can be split up into several named groups.

The ordering of items within a group is arbitrary and non-editable.

Dragging is not enabled until more than one group is present.

```javascript
const React = require ('react');

class ItemContent extends React.Component {
  render() {
    const { value, wrapDragHandle } = this.props;

    return (
      <div style={{ position: 'relative' }}>
        <Input value={value} />
        <div style={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'row',
          top: '50%',
          transform: 'translateY(-50%)',
          right: '15px',
          color: '#00bef0',
          fontSize: '18px',
        }}>
          <Icon name="settings" />
          <span style={{ width: '8px' }} />
          <Icon name="delete3" />
          <span style={{ width: '8px' }} />
          {wrapDragHandle(
            <Icon name="moveGrabber" />
          )}
        </div>
      </div>
    )
  }
}

const genId = () => Math.floor(Math.random() * 10000);

const replace = (array, idx, item) => [
  ...array.slice(0, idx),
  item,
  ...array.slice(idx + 1),
];

const remove = (array, idx) => [
  ...array.slice(0, idx),
  ...array.slice(idx + 1),
];

const insert = (array, idx, item) => [
  ...array.slice(0, idx),
  item,
  ...array.slice(idx),
];

const removeAt = (groups, groupIndex, index) => replace(groups, groupIndex, {
  ...groups[groupIndex],
  items: remove(groups[groupIndex].items, index),
});

const addTo = (groups, groupIndex, item) => replace(groups, groupIndex, {
  ...groups[groupIndex],
  items: groups[groupIndex].items.concat(item),
});

const split = (groups, groupIndex, itemIndex) => groups.reduce((newGroups, group, idx) => {
  if (groupIndex === idx) {
    const groupA = {
      id: group.id,
      items: group.items.slice(0, itemIndex),
    };
    const groupB = {
      id: genId(),
      items: group.items.slice(itemIndex),
    };
    return newGroups.concat([groupA, groupB]);
  }

  return newGroups.concat(group);
}, []);

class DemoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [
        {
          id: genId(),
          items: [
            { id: 'a', value: 'An item' },
            { id: 'b', value: 'Another item' },
            { id: 'b2', value: 'And another one' },
          ],
        },
        {
          id: genId(),
          items: [
            { id: 'c', value: 'Yet another item' },
            { id: 'd', value: 'Last one promise' },
          ],
        },
      ],
    };

    this.handleItemMoved = this.handleItemMoved.bind(this);
    this.handleGroupInserted = this.handleGroupInserted.bind(this);
    this.handleGroupRemoved = this.handleGroupRemoved.bind(this);
  }

  handleItemMoved({ from, to }) {
    if (to.groupIndex === null) {
      // ignore drops outside of a group
      return;
    }

    const state = this.state;
    const itemToMove = state.groups[from.groupIndex].items[from.itemIndex];
    const newState = {
      ...state,
      groups: addTo(
        removeAt(state.groups, from.groupIndex, from.itemIndex),
        to.groupIndex,
        itemToMove
      ),
    };

    this.setState(newState);
  };

  handleGroupInserted(groupIndex, itemIndex) {
    const state = this.state;
    const newState = {
      ...state,
      groups: split(state.groups, groupIndex, itemIndex),
    };
    this.setState(newState);
  }

  handleGroupRemoved(groupIndex) {
    const state = this.state;
    const newState = {
      ...state,
      groups: remove(state.groups, groupIndex),
    };
    this.setState(newState);
  }

  render() {
    const { groups } = this.state;
    return (
      <DragGroups
        onItemMoved={this.handleItemMoved}
        onGroupInserted={this.handleGroupInserted}
        onGroupRemoved={this.handleGroupRemoved}
      >
        {groups.map(group => (
          <DragGroups.Group key={group.id}>
            {group.items.map(item => (
              <DragGroups.Item key={item.id}>
                <ItemContent value={item.value} />
              </DragGroups.Item>)
            )}
          </DragGroups.Group>
        ))}
      </DragGroups>
    )
  }
}

<DemoApp />
```
