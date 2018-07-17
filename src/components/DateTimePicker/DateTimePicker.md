```
<React.Fragment>
<DateTimePicker
  onDateTimeChange={(date) =>
    console.log(date.format("LLLL"))
  }
/>
<br />
<DateTimePicker
  disabled
  onDateTimeChange={(date) =>
    console.log(date.format("LLLL"))
  }
/>
</React.Fragment>
```
