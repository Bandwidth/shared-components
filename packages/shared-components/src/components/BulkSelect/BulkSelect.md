```javascript
<div>
  <BulkSelect
    sections={[
      {
        title: 'Section 1',
        items: [
          { data: 'Foo', selected: true },
          { data: 'Bar', selected: false },
        ],
      },
      {
        title: 'Section 2',
        items: [
          { data: 'Baz', selected: false },
          { data: 'Corge', selected: true },
          { data: 'Thud', selected: false, disabled: true },
          { data: 'Dunk', selected: true, disabled: true },
        ],
      },
    ]}
    renderItem={(item) => item}
    computeItemKey={(item) => item}
  />
  <BulkSelect.Small
    sections={[
      {
        title: 'Small Variant',
        items: [
          { data: '1', selected: false },
          { data: '2', selected: true },
          { data: '3', selected: false, disabled: true },
          { data: '4', selected: true, disabled: true  },
          { data: '5', selected: false },
          { data: '6', selected: true },
        ],
      },
    ]}
    renderItem={(item) => item}
    computeItemKey={(item) => item}
  />
  <BulkSelect.Colorful
    sections={[
      {
        title: 'Color Variant',
        items: [
          { data: 'Clank', selected: true },
          { data: 'Pow', selected: false },
        ],
      },
    ]}
    renderItem={(item) => item}
    computeItemKey={(item) => item}
  />
</div>
```
