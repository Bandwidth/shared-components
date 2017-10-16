Styling wrapper around [react-select](https://github.com/JedWatson/react-select). See documentation there for full options.

```javascript
const options = [
  {
    label: 'Calico',
    value: 'calico',
  },
  {
    label: 'Tabby',
    value: 'tabby',
  },
  {
    label: 'Tuxedo',
    value: 'tuxedo',
  },
  {
    label: 'Persian',
    value: 'persian',
  },
];

class Wrap extends React.Component {
  constructor(props) {
    super(props);
    this.state = { val: '' };
  }

  render() {
    return (
      <SuggestInput
        options={options}
        value={this.state.val}
        onChange={(n) => this.setState({ val: n})}
      />
    );
  }
}

<Wrap />
```

In Redux projects, you'll probably want to make use of the `isLoading` prop to control loading state.

```javascript
<SuggestInput isLoading />
```
