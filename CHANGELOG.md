## v1.1.0 migration

`v1.1.0` brings the Flow system, which streamlines the way we lay out and annotate individual inputs, fields, and other UI components. Flow replaces the old Form- and Field-based layout solution with its confusing FieldGroup and FlexField options.

Wherever you used to rely on Form to layout Field components, you should migrate to use `Flow`, `Flow.Row`, `Flow.Item`, and `Flow.field`.

## v1.0.0 migration

### `/components` directory has been flattened into individual components and many directories have been reshuffled.

The way you access components has been dramatically simplified. You no longer need to import components individually from their respective files, traversing the internal directories of this module. Instead, just import all the things you want from the module directly:

```javascript
import { Form, Button, defaultTheme, Spacing, formatMoney } from '@bandwidth/shared-components';
```

This will be the bulk of your migration work: simply pulling all of your components out into one import statement. The components are largely unchanged.

However, there are a few renames. The goal of renaming has been to move into alignment with the [Design System](http://dev.bandwidth.com/design-system/). A few of the components in this library had the same name as an element from our design system, but a different function (ex: `Card`, `Code`, `Tabs`). These have been renamed to make room for the correct components.

### Moved or renamed components

* `Link` -> `Anchor`
* `Code` -> `CodeBlock`
* `InlineCode` -> `Code`
* `FileInput` -> `FileLoader`
* `List` -> `SidebarList`
* `TabGroup` -> `Navigation`
* `TopNav` -> `Navigation` (just provide `header` and `topLinks` props to get the top-level navigation header layout)
* `Card` -> `Summary`

### New components

* `List`: Styled `ul` or `ol`

### Several components now have sub-components

* `SidebarList.Item`
* `Accordion.Group`
* `RadioGroup.Button`
* `Code.Block`, `Code.Container`
* `Header.Sub`
* `List.Item`, `List.Ordered`
* `Table.Cell`, `Table.Controls`, `Table.Header`, `Table.Row`
* `Pane.Layout`, `Pane.Row`, `Pane.Column`, `Pane.Section`

These are convenience accessors for existing components, like `SidebarListItem`.

### Several components have been removed

* `MultiSelectGrid`
* `ErrorScreen`

### There is now a distinction between `components` and `layouts`

Layouts describe more organizational components which are meant to delineate sections, arrange sub-components, etc.

### The build output is now in the `/dist` directory.

This should only matter if you're trying to manually access it, since the module main file has been updated to `/dist/index.js`.
