```
<React.Fragment>
<H5>Default</H5>
<TimeScrubber onChange={time => console.log(time.format("LT"))}/>
<hr />
<H5>Range-Limited</H5>
<TimeScrubber allowedRange={[8, 18]} onChange={time => console.log(time.format("LT"))}/>
</React.Fragment>
```
