# v6.0.0

## Highlights

- Merged `@bandwidth/shared-components` and `@bandwidth/layouts`.
- Library will now be published to `@bandwidth/scale` in addition to `@bandwidth/shared-components`.
- `@bandwidth/layouts` will NO LONGER BE PUBLISHED.
- "configuration components" (i.e. all components which are not used directly, but are exported so they can be overriden and passed as props to "main" components) are no longer exported directly from the library. To use them, you must import them manually using the full path (ex: `import AccordionArrow from '@bandwidth/scale/dist/components/Accordion/styles/AccordionArrow';`)
- _We now use styled-components v4!_ Please update your local styled-components dependency and run their [code mod](https://github.com/styled-components/styled-components-codemods) for migration if necessary.
- `Anchor` is now `Link`! This is a high-profile rework of the unstable Anchor component. The new naming is meant to be more intuitive for those unfamiliar with the history of the `<a>` tag. See full migration docs below.
- We now use Rollup to package the library.
- Lots of components have moved. We don't export as many components from the root level anymore, and instead encourage you to reference static sub-components. See more detailed changes per-component below.
- We removed a lot of deprecated or otherwise unsupported stuff which no longer represents the design and interaction goals at Bandwidth.

## New Features

- `Foreground`: We now render a top-level, absolute-positioned div within `<BandwidthProvider>`. This div is used to power the new `Foreground` behavior. Just wrap any component in `<Foreground>` and it will be instantly portaled into the foreground of your app, within an absolutely-positioned window space. Be sure to style your component to use absolute positioning and move it to wherever you want it to be.

## Deprecated / Removed

- `Flow` is gone! Use `Field`!
- `Pane` has been marked as deprecated. It is still available, but the docs have been removed, and it will be removed in the next major release (7.x).
- `Fields` and `Fields.Field` have moved! Use `Field.Group` and `Field` respectively.
- `Steps` and `Steps.Step` have moved! Use `Step.Group` and `Step` respectively.
- `RadioGroup` is gone! Just create the correct `RadioButton` components.
- `Form` is gone! Use a regular `<form>`!
- `SidebarList` is gone! Migrate to use the `SplitContentLayout`!
- `Accordion.Group` is gone! Use a `<div>` or `<React.Fragment>`
- `userTextSpacing` is gone! Use `userSpacing.text`!
- `BulkSelect` is gone! Use `DragBox.Select` + `Grid` + `ToggleButton`!
- `TableControls` is gone! This pattern is no longer considered part of our best practices. You might want to replace it with a "Link solar system" instead (see the Layout guidance docs)
- `provinces` helper is no longer provided. Please check out the `provinces` NPM package yourself.
- `Expand` is gone. This was not a documented component, and wasn't used anywhere.
- `Select` no longer has a `multi` option. We are not aware of any current projects which use this feature. We may re-introduce it in a coming minor version, but for now we have removed it since it was not well-supported.
- `MethodTag` is deprecated. Please re-implement it in your own app if you need it. We may introduce a `Tag` component to replace it in a future release.

## Changes by Component

### Accordion

- Now automatically space themselves out when adjacent. `Accordion.Group` is no longer needed.

### Anchor -> Link migration

To migrate from Anchor to Link:

Firstly, if you are using React Router, read the new Link [docs](http://dev.bandwidth.com/shared-components/#!/Link) for information on how to integrate React Router's `<Link>` with ours. **We no longer ship with a React Router dependency, this will not work out of the box**.

Other usage migration details:

- For most use cases, you can just replace `<Anchor>` with `<Link>`.
- The `type` prop is now gone. Links will automatically be text links. If you pass `icon`, it will become an icon link.
  - If you want a "transparent" link (that doesn't style anything), use `<Link.Wrap>` (i.e. if you used to use `type="wrap"`)
- For icon "combo" links (or links which are just icons), be sure to provide an `icon="name"` prop if you don't already
- External links should be detected automatically and opened in a new tab. If you want to force a link to open in a new tab, you can still use the `newTab` prop.

### Input

- `readonly` prop is now `readOnly`.

### RadioButtonGroup

No longer exported. Use `RadioButton.Group`.

### CardGroup

No longer exported. Use `Card.Group`.

### CodeBlock

No longer exported. Use `Code.Block`.

### DateTimeRangePicker

No longer exported. Use `DateTimePicker.Range`.

### SubmitButton

No longer exported. Use `Button.Submit`.

### TableCell, TableHeader, TableBody, TableRow ...

Table sub-components are no longer exported. Use their attached static versions from Table instead, like `Table.Cell`, etc.

### ScrollShadow

Added `horizontal` prop, which creates a horizontally scrolling shadowed element.

### Select

Select has been rewritten to use Downshift and React Portals (it was using an old version of react-select, which was causing issues). The new version works even within overflow-hidden containers! However, we did end up removing the `multi` option for now to keep the rewrite simple. We may re-introduce it soon in a minor version.

## For contributors

- Since the libraries are now merged, you'll find all relevant code in `src/`.
- Automatic index creation has been removed. If you add a module, you must manage the exporting of it manually. This may be less convenient, but it's easier to maintain long-term.
- The dependency on the main `lodash` package has been removed. If you want to use a Lodash module, add it directly as a discrete dependency.

# v5.0.0

Whoops, forgot this one.

# v4.0.0

Whoops, forgot this one.

# v3.0.0

Major feature: Totally reworked the structure of components to create a clear divide between presentational and behavioral components. All sub-components of a component are now exposed as configurable props.

## Breaking Changes

- All `themes` have been removed.
  - Different sizes of components must now be accessed via attached 'variant' components, like `Accordion.Small`.
  - Error components, secondary components, and other visual modifications are also accessed via variants.
- All `Field` components have been removed. These components were deprecated in `v1.1.0`.
- `Navigation` has an entirely new usage. See the docs for the component for examples.
- `Pane.Layout` has been removed. Use `<Spacing>` instead.
- `Summary` experimental component removed. Use a Small FlowItem.
- `Header` has been renamed to `H1` for consistency with the design system.
- `SubHeader` has been renamed to `H2` for consistency with the design system.
- `H3`, `H4`, and `H5` introduced.
- `Modal`, `Pane` components now provide default padding. Be sure to check the padding of contained elements and remove any spacing you manually applied (or create a varian to customize padding).
- `Modal` no longer supports the `naturalWidth` prop. Use customized style component props to specify a new `width` value.
- `Pane` children _must_ be `Pane.Section`s to layout properly now. Otherwise, spacing will not be correct.
- `CodeBlock` no longer performs syntax highlighting. Syntax highlighting was inflating the library size. Handle syntax in your own app.
- `CodeWrapper` is gone. Use `CodeBlock`.
- A Catapult theme is now available. Theme will default to Iris. Use `BandwidthThemeProvider.Catapult` to provide the Catpault theme.
- `Pane` no longer has a `title` prop. Add an `H1` as the first child of a section in the Pane to replace this functionality.
- `Pane` padding has been revised.

## New Components

- `BulkSelect` introduced as an experimental component. The name may change.
- `SectionTitle` introduced as a common definition for the gray-block title seen on Modals and Panes. Now it can be used on its own.

# v2.0.0

Any clients using components directly within `styled-component` (i.e. including a component class directly as a templated parameter inside a `styled-components` template string) must now reference an exposed `.Styled` class instead. All exported components have been wrapped with transparent functional components in order to provide more useful automated documentation.

# v1.1.0

### Flow System

`v1.1.0` brings the Flow system, which streamlines the way we lay out and annotate individual inputs, fields, and other UI components. Flow replaces the old Form- and Field-based layout solution with its confusing FieldGroup and FlexField options.

Wherever you used to rely on Form to layout Field components, you should migrate to use `Flow`, `Flow.Row`, `Flow.Item`, and `Flow.field`.

### Field deprecation

`Field` components are now deprecated. `Form` is still available (it can provide some submit button features), but you should migrate from all `Field` components to `Flow.field` or raw `Flow.Item`s.

### Other Breaking Changes

`Select` now has an entirely reworked API. Now, instead of being a style wrapper around a typical HTML `<select>` element, it's a fleshed-out and powerful dropdown component. See the [docs](dev.bandwidth.com/shared-components/components/Select.html) for more information.

`SelectField` has also changed its API.

`Toggle` and `Checkbox` now use `description`, not `label`, to render their text label. This is to avoid conflicts with the Flow `label` prop.

`Toggle` and `Checkbox` now assign the `value` prop to `checked` on the underlying `input`.

# v1.0.0

### `/components` directory has been flattened into individual components and many directories have been reshuffled.

The way you access components has been dramatically simplified. You no longer need to import components individually from their respective files, traversing the internal directories of this module. Instead, just import all the things you want from the module directly:

```javascript
import {
  Form,
  Button,
  defaultTheme,
  Spacing,
  formatMoney,
} from '@bandwidth/shared-components';
```

This will be the bulk of your migration work: simply pulling all of your components out into one import statement. The components are largely unchanged.

However, there are a few renames. The goal of renaming has been to move into alignment with the [Design System](http://dev.bandwidth.com/design-system/). A few of the components in this library had the same name as an element from our design system, but a different function (ex: `Card`, `Code`, `Tabs`). These have been renamed to make room for the correct components.

### Moved or renamed components

- `Link` -> `Anchor`
- `Code` -> `CodeBlock`
- `InlineCode` -> `Code`
- `FileInput` -> `FileLoader`
- `List` -> `SidebarList`
- `TabGroup` -> `Navigation`
- `TopNav` -> `Navigation` (just provide `header` and `topLinks` props to get the top-level navigation header layout)
- `Card` -> `Summary`

### New components

- `List`: Styled `ul` or `ol`

### Several components now have sub-components

- `SidebarList.Item`
- `Accordion.Group`
- `RadioGroup.Button`
- `Code.Block`, `Code.Container`
- `Header.Sub`
- `List.Item`, `List.Ordered`
- `Table.Cell`, `Table.Controls`, `Table.Header`, `Table.Row`
- `Pane.Layout`, `Pane.Row`, `Pane.Column`, `Pane.Section`

These are convenience accessors for existing components, like `SidebarListItem`.

### Several components have been removed

- `MultiSelectGrid`
- `ErrorScreen`

### There is now a distinction between `components` and `layouts`

Layouts describe more organizational components which are meant to delineate sections, arrange sub-components, etc.

### The build output is now in the `/dist` directory.

This should only matter if you're trying to manually access it, since the module main file has been updated to `/dist/index.js`.
