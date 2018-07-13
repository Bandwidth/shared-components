```javascript
class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { startDate: null, endDate: null, focusedInput: null };
  }

  render() {
    return (
      <DateRangePicker
        {...this.props}
        startDate={this.state.startDate}
        endDate={this.state.endDate}
        onDatesChange={({ startDate, endDate }) => {
          this.setState({ startDate, endDate })
          console.log(startDate);
          console.log(endDate);
        }}
        focusedInput={this.state.focusedInput}
        onFocusChange={focusedInput => this.setState({ focusedInput })}
      />
    );
  }
}

<div>
  <div style={{ width: '100%', height: '400px' }}>
    <Wrapper />
  </div>
  <Wrapper openDirection="up" />
  <Wrapper disabled />
</div>
```
