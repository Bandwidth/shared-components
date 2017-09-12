Unlike traditional modal dialogs, Modal doesn't include functionality for closing or opening. It's recommended that you render Modal as a route in your React application with React Router.

Provides `title` prop for adding a title, and `onBlockerClicked` if you want to hook the click event on the shadow 'blocker' element which covers the page.

You can also use the `actionContent` prop to pass in stuff to render which will be fixed to the bottom of the modal. The rest of the content will scroll as it gets too large, but this content will continue to be visible at the bottom. Use this for things like close buttons or confirm buttons, which should always be visible.
