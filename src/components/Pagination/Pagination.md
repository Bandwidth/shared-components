```javascript
<Pagination
  pageCount={4}
  currentPage={2}
  onPageSelected={pageNumber => {
    /* handle it */
  }}
/>
```

From the beginning:

```javascript
<Pagination
  pageCount={8}
  currentPage={0}
  onPageSelected={pageNumber => {
    /* handle it */
  }}
/>
```

From the end:

```javascript
<Pagination
  pageCount={3}
  currentPage={2}
  onPageSelected={pageNumber => {
    /* handle it */
  }}
/>
```

Max of 10 pages shown:

```javascript
<Pagination
  pageCount={32}
  currentPage={12}
  onPageSelected={pageNumber => {
    /* handle it */
  }}
/>
```
