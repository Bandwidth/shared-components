```
<React.Fragment>
<DateTimePicker.Range
  onDateTimeChange={({startDatetime, endDatetime}) =>
    console.log(startDatetime.format("LLLL"), endDatetime.format("LLLL"))
  }
/>
<br />
<DateTimePicker.Range
  disabled
  onDateTimeChange={({startDatetime, endDatetime}) =>
    console.log(startDatetime.format("LLLL"), endDatetime.format("LLLL"))
  }
/>
<br />
<DateTimePicker.Range
  disabled="endDate"
  onDateTimeChange={({startDatetime, endDatetime}) =>
    console.log(startDatetime.format("LLLL"), endDatetime.format("LLLL"))
  }
/>
<br />
<DateTimePicker.Range
  disabled="startDate"
  onDateTimeChange={({startDatetime, endDatetime}) =>
    console.log(startDatetime.format("LLLL"), endDatetime.format("LLLL"))
  }
/>
</React.Fragment>
```
