```
<React.Fragment>
<DateTimePicker.Range
  onChange={({startDatetime, endDatetime}) =>
    console.log(startDatetime.format("LLLL"), endDatetime.format("LLLL"))
  }
/>
<br />
<DateTimePicker.Range
  openDirection="up"
  onChange={({startDatetime, endDatetime}) =>
    console.log(startDatetime.format("LLLL"), endDatetime.format("LLLL"))
  }
/>
<br />
<DateTimePicker.Range
  disabled
  onChange={({startDatetime, endDatetime}) =>
    console.log(startDatetime.format("LLLL"), endDatetime.format("LLLL"))
  }
/>
<br />
<DateTimePicker.Range
  disabled="endDate"
  onChange={({startDatetime, endDatetime}) =>
    console.log(startDatetime.format("LLLL"), endDatetime.format("LLLL"))
  }
/>
<br />
<DateTimePicker.Range
  disabled="startDate"
  onChange={({startDatetime, endDatetime}) =>
    console.log(startDatetime.format("LLLL"), endDatetime.format("LLLL"))
  }
/>
</React.Fragment>
```
