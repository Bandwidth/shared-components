Modal
=====


Props
-----

Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
children|node||Yes|Content to render in the modal.
title|string|null|No|An optional title for the top of the modal.
onBlockerClicked|func|() => null|No|Handles click events on the backdrop behind the modal. Use this to close it if desired.
naturalWidth|string|'auto'|No|Sets a natural CSS width for the modal window. Defaults to 'auto'.
className|string|null|No|Adds a class name to the modal window element.
id|string|null|No|Adds an id to the modal window element.

Unlike traditional modal dialogs, Modal doesn't include functionality for closing or opening. It's recommended that you render Modal as a route in your React application with React Router.

Provides `title` prop for adding a title, and `onBlockerClicked` if you want to hook the click event on the shadow 'blocker' element which covers the page.

```
<Route exact path="/modal">
  <Modal>Content <Link to="/">Close</Link></Modal>
</Route>
```
