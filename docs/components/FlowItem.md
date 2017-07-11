FlowItem
========


Props
-----

Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
label|node|null|No|A label for this item. May be a Label instance or a string.
helpText|node|null|No|Help text for this item. May be a HelpText instance or a string.
children|node|null|No|Contents of this item. This goes between the label and the help text.
moreContent|node|null|No|More contents for this item. This goes below the help text and extends the size
of the component.
flexibleContent|bool|false|No|Allows the main content to grow larger than the default fixed size.
alignment|enum('stretch'\|'left'|'right')|'stretch'|No|Aligns the various elements within the item to a particular side.
error|bool|false|No|Whether this item should render a visual error state.
id|string|null|No|An id to add to the item container element.
className|string|null|No|A class name to add to the item container element.


