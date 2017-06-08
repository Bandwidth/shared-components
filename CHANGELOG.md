## v1 migration

### `/components` directory has been flattened into individual components and many directories have been reshuffled.

* `Code` now exports `Code` (formerly `InlineCode`) by default. Other named exports are available.

### Several components have been renamed.

* `Link` -> `Anchor`
* `Code` -> `CodeBlock`
* `InlineCode` -> `Code`
* `FileInput` -> `FileLoader`
* `List` -> `...`
* `TabGroup` -> `Navigation`
* `TopNav` -> `NavigationHeader`

### Field components have been moved under `Form`

`import { TextField, ButtonField } from '@bandwidth/shared-components/Form';`

### Several components have been removed

* `MultiSelectGrid`
* `ErrorScreen`
