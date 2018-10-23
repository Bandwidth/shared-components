```javascript
class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: null};
  }

  render() {
    return (
      <DatePicker
        {...this.props}
        date={this.state.date}
        onDateChange={(date) => {
          this.setState({ date })
        }}
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
