Styling wrapper around [react-autosuggest](https://github.com/moroshko/react-autosuggest). See documentation there for full options.

```javascript
const suggestions = [
  'Calico',
  'Tabby',
  'Tuxedo',
  'Persian',
];

class Wrap extends React.Component {
  constructor(props) {
    super(props);
    this.state = { val: '' };
  }

  render() {
    return (
      <SearchBox
        suggestions={suggestions}
        renderSuggestionContent={(sugg) => sugg}
        getSuggestionValue={(sugg) => sugg}
        value={this.state.val}
        onChange={(_, { newValue }) => this.setState({ val: newValue })}
        onSuggestionsFetchRequested={() => null}
        onSuggestionsClearRequested={() => null}
        inputProps={{ placeholder: 'Start typing...' }}
      />
    );
  }
}

<Wrap />
```

### With a Button

Use the `showSubmitButton` prop to add a submit button to the field. Use `onSubmit` to handle submissions and `enableSubmit` to control when the button is enabled.

```javascript
const suggestions = [
  'Calico',
  'Tabby',
  'Tuxedo',
  'Persian',
];

class Wrap extends React.Component {
  constructor(props) {
    super(props);
    this.state = { val: '' };
  }

  render() {
    return (
      <SearchBox
        suggestions={suggestions}
        renderSuggestionContent={(sugg) => sugg}
        getSuggestionValue={(sugg) => sugg}
        value={this.state.val}
        onChange={(_, { newValue }) => this.setState({ val: newValue })}
        onSuggestionsFetchRequested={() => null}
        onSuggestionsClearRequested={() => null}
        inputProps={{ placeholder: 'Type at least 3 characters' }}

        showSubmitButton
        onSubmit={() => { alert(this.state.val) }}
        enableSubmit={this.state.val.length > 2}
      />
    );
  }
}

<Wrap />
```

You can use the `showSuggestionsOnFocus` prop to let the user preview suggestions before typing:

```javascript
const suggestions = [
  'Calico',
  'Tabby',
  'Tuxedo',
  'Persian',
];

class Wrap extends React.Component {
  constructor(props) {
    super(props);
    this.state = { val: '' };
  }

  render() {
    return (
      <SearchBox
        suggestions={suggestions}
        renderSuggestionContent={(sugg) => sugg}
        getSuggestionValue={(sugg) => sugg}
        value={this.state.val}
        onChange={(_, { newValue }) => this.setState({ val: newValue })}
        onSuggestionsFetchRequested={() => null}
        onSuggestionsClearRequested={() => null}

        showSuggestionsOnFocus
      />
    );
  }
}

<Wrap />
```

### Real-Life Usage

For most applications, you'll probably be calling out to an API to get suggestions when the user types. So in reality, you'll start with no suggestions and need to rebuild the list when the user changes their input. This can be done using the provided `onSuggestionsFetchRequested` prop to do filtering, and `onSuggestionsClearRequested` to reset.

```javascript
// example of more complicated data
const suggestions = [
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
    this.state = {
      val: '',
      suggestions: [],
    };

    ['onFetchRequested', 'onClearRequested'].forEach((name) => {
      this[name] = this[name].bind(this);
    });
  }

  onFetchRequested({ value }) {
    const filtered = suggestions.filter(
      (s) => s.value.toLowerCase().indexOf(value.toLowerCase()) > -1
    );

    this.setState({
      suggestions: filtered,
    });
  }

  onClearRequested() { this.setState({ suggestions: [] }); }

  render() {
    return (
      <SearchBox
        suggestions={this.state.suggestions}
        renderSuggestionContent={(sugg) => sugg.label}
        getSuggestionValue={(sugg) => sugg.value}
        value={this.state.val}
        onChange={(_, { newValue }) => { this.setState({ val: newValue });}}
        onSuggestionsFetchRequested={this.onFetchRequested}
        onSuggestionsClearRequested={this.onClearRequested}
      />
    );
  }
}

<Wrap />
```

### Sections

The component also supports sections:

```javascript
const suggestions = [
  {
    title: 'Cats',
    suggestions: [
      'Calico',
      'Tabby',
      'Tuxedo',
      'Persian',
    ],
  },
  {
    title: 'Dogs',
    suggestions: [
      'Corgi',
      'Husky',
      'Boxer',
      'Mastiff',
    ],
  },
];

class Wrap extends React.Component {
  constructor(props) {
    super(props);
    this.state = { val: '' };
  }

  render() {
    return (
      <SearchBox
        multiSection
        suggestions={suggestions}
        getSectionSuggestions={(sec) => sec.suggestions}
        getSuggestionValue={(sugg) => sugg}
        value={this.state.val}
        onChange={(_, { newValue }) => { this.setState({ val: newValue });}}
        onSuggestionsFetchRequested={() => null}
        onSuggestionsClearRequested={() => null}
      />
    );
  }
}

<Wrap />
```
