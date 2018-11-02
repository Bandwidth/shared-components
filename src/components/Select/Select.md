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
    renderOption={opt => `${opt.name} (${opt.count})`}
  />
  <div>Loading state:</div>
  <Select options={options} loading />
</div>;
```
