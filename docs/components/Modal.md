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
actionContent|node|null|No|Content to render in a fixed position at the bottom of the modal - meant for action buttons, like close.

Unlike traditional modal dialogs, Modal doesn't include functionality for closing or opening. It's recommended that you render Modal as a route in your React application with React Router.

Provides `title` prop for adding a title, and `onBlockerClicked` if you want to hook the click event on the shadow 'blocker' element which covers the page.

```
<Route exact path="/modal">
  <Modal>Content <Link to="/">Close</Link></Modal>
</Route>
```

You can also use the `actionContent` prop to pass in stuff to render which will be fixed to the bottom of the modal. The rest of the content will scroll as it gets too large, but this content will continue to be visible at the bottom. Use this for things like close buttons or confirm buttons, which should always be visible.

```
<Modal
  actionContent={(
    <Flow>
      <Flow.Row>
        <Flow.Item>
          <Button onClick={close}>Close</Button>
        </Flow.Item>
      </Flow.Row>
    </Flow>
  )}
>
  This is a closeable modal message.
</Modal>
```
