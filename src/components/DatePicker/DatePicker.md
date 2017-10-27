This is a styling wrapper around [react-dates](https://github.com/airbnb/react-dates). Please see [here](https://github.com/airbnb/react-dates#singledatepicker) for prop types.

```javascript
class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: null, focused: false };
  }

  render() {
    return (
      <DatePicker
        {...this.props}
        date={this.state.date}
        onDateChange={(date) => {
          this.setState({ date })
        }}
        focused={this.state.focused}
        onFocusChange={({ focused }) => this.setState({ focused })}
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
