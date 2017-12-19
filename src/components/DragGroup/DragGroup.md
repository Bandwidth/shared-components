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

const genKey = () => Math.floor(Math.random() * 10000);

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
      key: group.key,
      items: group.items.slice(0, itemIndex),
    };
    const groupB = {
      key: genKey(),
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
          key: genKey(),
          items: [
            { key: 'a', value: 'An item' },
            { key: 'b', value: 'Another item' },
            { key: 'b2', value: 'And another one' },
          ],
        },
        {
          key: genKey(),
          items: [
            { key: 'c', value: 'Yet another item' },
            { key: 'd', value: 'Last one promise' },
          ],
        },
      ],
    };

    this.handleItemMoved = this.handleItemMoved.bind(this);
    this.handleGroupInserted = this.handleGroupInserted.bind(this);
    this.handleGroupRemoved = this.handleGroupRemoved.bind(this);
  }

  handleItemMoved(itemIndex, fromGroupIndex, toGroupIndex) {
    console.log(`${itemIndex} ${fromGroupIndex} ${toGroupIndex}`);
    if (toGroupIndex === null) {
      // ignore drops outside of a group
      return;
    }

    const state = this.state;
    const itemToMove = state.groups[fromGroupIndex].items[itemIndex];
    const newState = {
      ...state,
      groups: addTo(
        removeAt(state.groups, fromGroupIndex, itemIndex),
        toGroupIndex,
        itemToMove
      ),
    };

    this.setState(newState);
  };

  handleGroupInserted(groupIndex, itemIndex) {
    console.log(`${groupIndex} ${itemIndex}`);
    const state = this.state;
    const newState = {
      ...state,
      groups: split(state.groups, groupIndex, itemIndex),
    };
    this.setState(newState);
  }

  handleGroupRemoved(groupIndex) {
    const state = this.state;
    const removedItems = state.groups[groupIndex].items;
    const addToGroupIndex = groupIndex > 0 ? groupIndex - 1 : groupIndex;
    const newState = {
      ...state,
      groups: removedItems.reduce(
        (groups, item) => addTo(groups, addToGroupIndex, item),
        remove(state.groups, groupIndex)
      )
    };
    this.setState(newState);
  }

  render() {
    const { groups } = this.state;
    return (
      <div>
        {groups.map((group, groupIdx) => (
          <DragGroup
            key={group.key}
            groupId={groupIdx}
            name={`Group ${groupIdx + 1}`}
            allowDrag={groups.length > 1}
            collapsible={groups.length > 1}
            itemType="demo"
            onSplit={itemIdx => this.handleGroupInserted(groupIdx, itemIdx)}
            onRemoved={() => this.handleGroupRemoved(groupIdx)}
          >
            {group.items.map((item, itemIdx) => (
              <DragGroup.Item
                key={item.key}
                onMove={
                  (fromGroupIdx, toGroupIdx) =>
                    this.handleItemMoved(itemIdx, fromGroupIdx, toGroupIdx)
                }
              >
                <ItemContent value={item.value} />
              </DragGroup.Item>)
            )}
          </DragGroup>
        ))}
      </div>
    )
  }
}

<div style={{ display: 'flex' }}>
  <div style={{ margin: 'auto', width: '350px' }}>
    <DemoApp />
  </div>
</div>
```

Note that the code in this example implements the full logic of manpiulating a hypothetical set of groups. It's up to you to determine how to use the events from `DragGroups` to manipulate your own state, and how to then render that state as `DragGroups.Group` and `DragGroups.Item` elements within your JSX structure.

### Note on redux-form

This component doesn't lend itself well to compatibility with redux-form due to the complex and dynamic shape of its data. If you need to include a DragGroup inside a redux-form powered form, it's recommended that you simply create a typical Redux container for the DragGroup and handle its state outside of your form, then merge the state in during the submit phase.

If you need to integrate this component as a Field, the easiest way would be to write a wrapping stateful component around it which serializes the state before passing it along to an `onChange` prop, and deserializes incoming state from a `value` prop.

If you want to fully control field manipulation using nested redux-form FieldArrays, you'll need to write your own logic for updating redux-form state using its [action creators](https://redux-form.com/7.2.0/docs/api/actioncreators.md/). This looks entirely possible, but might be a good bit of work.

### Another example: horizontal groups

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

const genKey = () => Math.floor(Math.random() * 10000);

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
      key: group.key,
      items: group.items.slice(0, itemIndex),
    };
    const groupB = {
      key: genKey(),
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
          key: genKey(),
          items: [
            { key: 'a', value: 'An item' },
            { key: 'b', value: 'Another item' },
            { key: 'b2', value: 'And another one' },
          ],
        },
        {
          key: genKey(),
          items: [
            { key: 'c', value: 'Yet another item' },
            { key: 'd', value: 'Last one promise' },
          ],
        },
      ],
    };

    this.handleItemMoved = this.handleItemMoved.bind(this);
    this.handleGroupInserted = this.handleGroupInserted.bind(this);
    this.handleGroupRemoved = this.handleGroupRemoved.bind(this);
  }

  handleItemMoved(itemIndex, fromGroupIndex, toGroupIndex) {
    console.log(`${itemIndex} ${fromGroupIndex} ${toGroupIndex}`);
    if (toGroupIndex === null) {
      // ignore drops outside of a group
      return;
    }

    const state = this.state;
    const itemToMove = state.groups[fromGroupIndex].items[itemIndex];
    const newState = {
      ...state,
      groups: addTo(
        removeAt(state.groups, fromGroupIndex, itemIndex),
        toGroupIndex,
        itemToMove
      ),
    };

    this.setState(newState);
  };

  handleGroupInserted(groupIndex, itemIndex) {
    console.log(`${groupIndex} ${itemIndex}`);
    const state = this.state;
    const newState = {
      ...state,
      groups: split(state.groups, groupIndex, itemIndex),
    };
    this.setState(newState);
  }

  handleGroupRemoved(groupIndex) {
    const state = this.state;
    const removedItems = state.groups[groupIndex].items;
    const addToGroupIndex = groupIndex > 0 ? groupIndex - 1 : groupIndex;
    const newState = {
      ...state,
      groups: removedItems.reduce(
        (groups, item) => addTo(groups, addToGroupIndex, item),
        remove(state.groups, groupIndex)
      )
    };
    this.setState(newState);
  }

  render() {
    const { groups } = this.state;
    return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {groups.map((group, groupIdx) => (
          <div style={{ width: '350px', margin: '0 10px' }}>
            <DragGroup
              key={group.key}
              groupId={groupIdx}
              name={`Group ${groupIdx + 1}`}
              allowDrag={groups.length > 1}
              collapsible={groups.length > 1}
              itemType="demo"
              onSplit={itemIdx => this.handleGroupInserted(groupIdx, itemIdx)}
              onRemoved={() => this.handleGroupRemoved(groupIdx)}
            >
              {group.items.map((item, itemIdx) => (
                <DragGroup.Item
                  key={item.key}
                  onMove={
                    (fromGroupIdx, toGroupIdx) =>
                      this.handleItemMoved(itemIdx, fromGroupIdx, toGroupIdx)
                  }
                >
                  <ItemContent value={item.value} />
                </DragGroup.Item>)
              )}
            </DragGroup>
          </div>
        ))}
      </div>
    )
  }
}

<DemoApp />
```
