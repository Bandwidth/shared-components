Pagination
==========


Props
-----

Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
pageCount|number|1|No|The number of total pages available.
currentPage|number|0|No|The currently selected page index.
onPageSelected|func||Yes|A callback for page selection. The callback is passed the new selected page index.
className|string|null|No|Adds a class name to the pagination container element.
id|string|null|No|Adds an id to the pagination container element.

Renders a 'controlled' pagination container. You need to provide the current page and other metadata.

```
<Pagination pageCount={4} page={1} onPageSelected={(pageNumber) => { /* handle it */ }} />
```
