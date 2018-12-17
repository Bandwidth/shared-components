```javascript
const options = ['One', 'Two', 'Three', 'Four', 'Five'];

const complexOptions = [
  {
    id: 'a',
    count: 8,
    name: 'Cats',
  },
  {
    id: 'b',
    count: 2,
    name: 'Dogs',
  },
  {
    id: 'c',
    count: 5,
    name: 'Birds',
  },
];

<div>
  <div>A basic select:</div>
  <Select options={options} />
  <div>An invalid select:</div>
  <Select invalid options={options} />
  <div>A searchable select:</div>
  <Select.Searchable options={options} />
  <div>A required select:</div>
  <Select required options={options} />
  <div>A select with complex options:</div>
  <Select
    options={complexOptions}
    getOptionValue={opt => opt.id}
    renderOption={opt => opt && `${opt.name} (${opt.count})`}
  />
  <div>Loading state:</div>
  <Select options={options} loading />
  <div>Searchable loading state:</div>
  <Select.Searchable options={options} loading />
</div>;
```

### Customizing Select

To change how `Select` renders or behaves, you'll need to use component props to override its internal components for rendering and display of items.

`Select` has two core render components: the `CurrentValue` (which displays the 'input' that is always visible on the page, and which represents the currently selected value), and the `Options` (which is the pop-out list of options used to change the value).

Each of these core components has its own set of props which it receives, and is expected to render certain things:

#### CurrentValue

`CurrentValue` recieves these props:

- `placeholder`: a string placeholder value for when the user has not selected a value
- `disabled`: a boolean for whether the Select is disabled
- `loading`: a boolean for whether the Select is loading options or the value itself
- `invalid`: a boolean for whether the value of the Select is not valid (error state)
- `required`: a boolean for whether the Select must be filled before proceeding
- `id`: the primary `id` for the whole component, which should be attached to the most important element rendered (usually an `<input>`).
- `className`: the primary `className` for the whole component, which should be attached to the most important element rendered (usually an `<input>`).
- [**All Downshift props** for the component.](https://github.com/paypal/downshift#children-function) These are important and should be used according to the Downshift [documentation.](https://github.com/paypal/downshift#children-function)

In addition to these props, `CurrentValue` also receives a `ref`. **Important:** you must forward this `ref` to the actual rendered element which constitutes the outer container for your `CurrentValue` component. If you do not forward the ref correctly, you will experience broken pop-out behavior. See the [official docs for ref forwarding](https://reactjs.org/docs/forwarding-refs.html).

How you implement your `CurrentValue` component determines how the Select behaves. For instance, the main difference between `Select` and `Select.Searchable` is that the searchable's version of `CurrentValue` utilizes an `<Input>` component and attaches Downshift's `getInputProps()` to that component, allowing the user to type values into the Select.

##### Example: Customizing Styling of CurrentValue

We hope that, for most cases, the functionality of either `Select.styles.CurrentValue` or `Select.styles.SearchableCurrentValue` will suffice for your use cases. However, you may want to customize the styling of the current value component. To do so, you can create a copy of it with component override props applied.

```js static
import React, { forwardRef } from 'react';
import { Select } from '@bandwidth/shared-components';
import MyCustomInput from './MyCustomInput';
import MyCustomArrow from './MyCustomArrow';

// forwardRef is important here! We have to forward the ref down into our base CurrentValue
// component!
// Also, we are using Searchable here, but you can do the same stuff with the regular
// Select.styles.CurrentValue.
const CustomizedCurrentValue = forwardRef((props, ref) => (
  <Select.styles.SearchableCurrentValue
    {...props}
    Input={Input}
    Arrow={Arrow}
    ref={ref}
  />
));

const CustomizedSelect = props => (
  <Select CurrentValue={CustomizedCurrentValue} {...props} />
);
```

#### Options

Options is simpler than `CurrentValue` to implement. It receives the following props:

- `renderOption`: the function which the user provides to `Select` that takes an option and returns JSX for how it should be displayed. You should use this to display the contents of each of your options.
- `options`: an array of the options themselves. Again, these are the same as the ones provided to the `Select` by the user.
- [**All Downshift props** for the component.](https://github.com/paypal/downshift#children-function) These are important and should be used according to the Downshift [documentation.](https://github.com/paypal/downshift#children-function)
- [**All React Popper props** from the Popper component.](https://github.com/FezVrasta/react-popper#children) These are imporant and should be used according to the React-Popper [documentation.](https://github.com/FezVrasta/react-popper#children)

In addition to these props, `Options` also receives a `ref`. **Important:** you must forward this `ref` to the actual rendered element which constitutes the outer container for your `Options` component. If you do not forward the ref correctly, you will experience broken pop-out behavior. See the [official docs for ref forwarding](https://reactjs.org/docs/forwarding-refs.html).

You don't need to manage the pop-out functionality for Options, we do this internally with React-Popper for you. You just need to make sure the ref is applied correctly.

You should also be sure to assign the appropriate Downshift props to your components. This includes the menu props, and the item props for each individual item.

##### Example: Virtualized Options List

```js static
// these would need to also be used in the CSS for the rendered OptionsList and Option
// elements.
const OPTION_SIZE = 48;
const MAX_HEIGHT = 200;

const VirtualizedOptions = forwardRef((props, ref) => {
  const {
    placement,
    getMenuProps,
    getItemProps,
    renderOption,
    highlightedIndex,
    style,
    options,
    OptionsList,
    Option,
  } = props;

  if (options.length === 0) {
    return (
      <OptionsList data-placement={placement} {...getMenuProps({ ref, style })}>
        No options
      </OptionsList>
    );
  }

  return (
    <OptionsList data-placement={placement} {...getMenuProps({ ref, style })}>
      <VirtualList
        width={style.width}
        height={Math.min(options.length * OPTION_SIZE, MAX_HEIGHT)}
        itemCount={options.length}
        itemSize={OPTION_SIZE}
        scrollToIndex={highlightedIndex || 0}
        scrollToAlignment="auto"
        renderItem={({ index, style: itemStyle }) => (
          <Option
            key={renderOption(options[index])}
            {...getItemProps({
              style: itemStyle,
              index,
              item: options[index],
              highlighted: highlightedIndex === index,
            })}
          >
            {renderOption(options[index])}
          </Option>
        )}
      />
    </OptionsList>
  );
});

const CustomizedSelect = props => (
  <Select Options={VirtualizedOptions} {...props} />
);
```
