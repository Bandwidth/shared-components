Select
====

      
A dropdown input which lets you pick from a list of provided items. Supports default input-style props:

* `input`: supplied by Redux Form's Field component, you can also specify this manually. Should contain `value` and `onChange` at least.
* `label`: a renderable label to go above the component
* `helpText`: some text to be rendered below the component
* `disabled`: disables the component
* `required`: adds a required mark and HTML field validation
* `options`: an array of data
* `renderOption`: a function to transform an option item into some text to show. Defaults to `val => '' + val`
* `selectOptionKey`: a function to transform an option into a **unique** key

```
<Select label="Choose:" required helpText="Make a choice!" options={['a', 'b']}>
```
