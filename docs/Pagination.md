Pagination
==========


Props
-----

Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
pageCount|number|1|No|
currentPage|number|0|No|
onPageSelected|func||Yes|

Renders a 'controlled' pagination container. You need to provide the current page and other metadata.

```
<Pagination pageCount={4} page={1} onPageSelected={(pageNumber) => { /* handle it */ }} />
```
