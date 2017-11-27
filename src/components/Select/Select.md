```javascript
const options = [
  'One',
  'Two',
  'Three',
  'Four',
  'Five',
];

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

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: null };
  }

  render() {
    return (
      <div style={{ padding: '8px 0' }}>
        <Select
          {...this.props}
          value={this.state.value}
          onChange={(newValue) => this.setState({ value: newValue })}
        />
        <div>Raw Value: {JSON.stringify(this.state.value)}</div>
      </div>
    );
  }
}

<div>
  <div>A basic select:</div>
  <Wrapper options={options} />
  <div>A searchable select:</div>
  <Wrapper searchable options={options}/>
  <div>A required select:</div>
  <Wrapper required options={options}/>
  <div>A multi select:</div>
  <Wrapper multi options={options}/>
  <div>A select with complex options:</div>
  <Wrapper
    options={complexOptions}
    getOptionValue={(opt) => opt.id}
    renderOption={(opt) => `${opt.name} (${opt.count})`}
  />
  <div>Loading state:</div>
  <Wrapper options={options} loading/>
</div>
```

Visual test: inside a fixed size boundary
```javascript
<div style={{ overflowY: 'hidden' }}>
  <Select value="a" options={['a', 'b', 'c', 'd', 'e', 'f']}/>
</div>
```
