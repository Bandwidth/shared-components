```
<React.Fragment>
<H5>12 hour format</H5>
<TimePicker onChange={time => console.log(time.format("LT"))}/>
<hr />
<H5>24 hour format</H5>
<TimePicker timeFormat="HH:mm" onChange={time => console.log(time.format("LT"))}/>
</React.Fragment>
```
