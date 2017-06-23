Modal
====

      
Unlike traditional modal dialogs, Modal doesn't include functionality for closing or opening. It's recommended that you render Modal as a route in your React application with React Router.

Provides `title` prop for adding a title, and `onBlockerClicked` if you want to hook the click event on the shadow 'blocker' element which covers the page.

```
<Route exact path="/modal">
  <Modal>Content <Link to="/">Close</Link></Modal>
</Route>
```
