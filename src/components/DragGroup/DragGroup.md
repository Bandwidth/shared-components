> **Note:** You must include [BandwidthProvider](/#!/BandwidthProvider) at or near the root of your application to use drag and drop functionality.

A collection of items which can be split up into several named groups.

The ordering of items within a group is arbitrary and non-editable.

Dragging is not enabled until more than one group is present.

#### Implementation notes

This component requires you to implement state behavior to support the desired UX.

Here is a brief summary of the rules:

* Groups should not be collapsible unless multiple groups are present
* Items should not be draggable unless multiple groups are present
* When a group is removed, its items are shifted to the group above it; if no group is above it, they should be shifted to the group below it.
* When a group is split, the items *up to* the separator index should be moved into the newly created group, which should be placed *before* the group which initiated the split. The remaining items *including and after* the separator index should remain in the group.
* When an item is moved, it should be removed from the source group and appended to the end of the target group.
* When a group has no remaining items, it should be removed.

```javascript
const React = require ('react');

// a demo component to put in the items
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
          {/* Using wrapDragHandle to indicate which element is the handle */}
          {wrapDragHandle(
            <Icon name="moveGrabber" />
          )}
        </div>
      </div>
    )
  }
}

// some utility functions

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
      key: genKey(),
      items: group.items.slice(0, itemIndex),
    };
    const groupB = {
      key: group.key,
      items: group.items.slice(itemIndex),
    };
    return newGroups.concat([groupA, groupB]);
  }

  return newGroups.concat(group);
}, []);

// our demo app manages group state and modifications
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
    if (toGroupIndex === null) {
      // ignore drops outside of a group
      return;
    }

    const state = this.state;
    // store the item which will be moved from the source group
    const itemToMove = state.groups[fromGroupIndex].items[itemIndex];
    const newState = {
      ...state,
      // add the item to the target group
      groups: addTo(
        // remove the item from the source group
        removeAt(state.groups, fromGroupIndex, itemIndex),
        toGroupIndex,
        itemToMove
      ).filter(group => group.items.length > 0), // remove any empty groups
    };

    this.setState(newState);
  };

  handleGroupInserted(groupIndex, itemIndex) {
    const state = this.state;
    const newState = {
      ...state,
      // splits the group at the item index
      groups: split(state.groups, groupIndex, itemIndex),
    };
    this.setState(newState);
  }

  handleGroupRemoved(groupIndex) {
    const state = this.state;
    // store the items which will be added to a different group
    const removedItems = state.groups[groupIndex].items;
    // determine whether there is a previous group; if not, use the existing
    // group index, which will reference the next group once this one is
    // removed
    const addToGroupIndex = groupIndex > 0 ? groupIndex - 1 : groupIndex;
    const newState = {
      ...state,
      // iterate through all removed items and add them to the new list
      groups: removedItems.reduce(
        (groups, item) => addTo(groups, addToGroupIndex, item),
        // remove the current group from the list to create the source
        // array for the reduce operation
        remove(state.groups, groupIndex)
      )
    };
    this.setState(newState);
  }

  render() {
    const { groups } = this.state;

    // the following render contains instances of 'binding' callbacks
    // to group and item indexes. Notice how we are using a closure to
    // pass a bound `groupIdx` in `onSplit` for instance.
    // This is necessary practice to inform our state management
    // of which groups and items events are operating on
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

// a demo component to put in the items
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
          {/* Using wrapDragHandle to indicate which element is the handle */}
          {wrapDragHandle(
            <Icon name="moveGrabber" />
          )}
        </div>
      </div>
    )
  }
}

// some utility functions

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
      key: genKey(),
      items: group.items.slice(0, itemIndex),
    };
    const groupB = {
      key: group.key,
      items: group.items.slice(itemIndex),
    };
    return newGroups.concat([groupA, groupB]);
  }

  return newGroups.concat(group);
}, []);

// our demo app manages group state and modifications
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
    if (toGroupIndex === null) {
      // ignore drops outside of a group
      return;
    }

    const state = this.state;
    // store the item which will be moved from the source group
    const itemToMove = state.groups[fromGroupIndex].items[itemIndex];
    const newState = {
      ...state,
      // add the item to the target group
      groups: addTo(
        // remove the item from the source group
        removeAt(state.groups, fromGroupIndex, itemIndex),
        toGroupIndex,
        itemToMove
      ).filter(group => group.items.length > 0), // remove any empty groups
    };

    this.setState(newState);
  };

  handleGroupInserted(groupIndex, itemIndex) {
    const state = this.state;
    const newState = {
      ...state,
      // splits the group at the item index
      groups: split(state.groups, groupIndex, itemIndex),
    };
    this.setState(newState);
  }

  handleGroupRemoved(groupIndex) {
    const state = this.state;
    // store the items which will be added to a different group
    const removedItems = state.groups[groupIndex].items;
    // determine whether there is a previous group; if not, use the existing
    // group index, which will reference the next group once this one is
    // removed
    const addToGroupIndex = groupIndex > 0 ? groupIndex - 1 : groupIndex;
    const newState = {
      ...state,
      // iterate through all removed items and add them to the new list
      groups: removedItems.reduce(
        (groups, item) => addTo(groups, addToGroupIndex, item),
        // remove the current group from the list to create the source
        // array for the reduce operation
        remove(state.groups, groupIndex)
      )
    };
    this.setState(newState);
  }

  render() {
    const { groups } = this.state;

    // the following render contains instances of 'binding' callbacks
    // to group and item indexes. Notice how we are using a closure to
    // pass a bound `groupIdx` in `onSplit` for instance.
    // This is necessary practice to inform our state management
    // of which groups and items events are operating on
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
