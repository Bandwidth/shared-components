**Beta**: The usage of this system may change as it continues to be refined.

Creates a scrolling wrapping container that has a shadow effect to indicate that there is content above or below.

```js
<div style={{ height: '500px', overflow: 'hidden' }}>
  <ScrollShadow>
    <div style={{ height: '5000px', width: '100%' }}>Some scrolling child content</div>
  </ScrollShadow>
</div>
```

You can also connect to the global scroll state by passing the `global` prop to the `ScrollShadow` component. You should only ever have one global observer in your React tree.

```js static
<ScrollShadow global>
  <div>App layout</div>
</ScrollShadow>
```

You can supply some props to ScrollShadow to control various features. `Container` lets you customize the component used to render the outer container. This component should always have relative or absolute positioning. `ScrollContainer` lets you customize the component used to render the scrollable area. It should also have relative or absolute positioning, and should define an overflow behavior. `outer` will cause the shadow to render outside the scrolling container. `debugShowSentinels` will display the sentinel elements used to track the scroll position as red lines on the screen so you can debug your scroll layout if it's not working. These red lines should appear at the very top and bottom of the inner scrollable content.

By default, ScrollShadow applies an inset shadow to the scroll container itself. If you would like to dynamically apply a shadow to an unrelated element depending on the scroll position of a scroll context higher in the tree, you may use the `ScrollShadow.ConnectedShadow` component anywhere beneath the `ScrollShadow` component.

```js static
<ScrollShadow>
  <div>
    Some scrolling child content
    {/* creates a simple element with a shadow applied */}
    <ScrollShadow.ConnectedShadow />
  </div>
</ScrollShadow>
```

ConnectedShadow can be used to power more advanced effect scenarios. For instance, it's used to apply an outer shadow to the ActionBar in the SplitContentLayout in the layouts library.

ConnectedShadow renders a div with `absolute` positioning, meant to cover the entire area of its parent. It does not intercept pointer events, so even though it will render above a parent, it will not interfere with user interaction.
