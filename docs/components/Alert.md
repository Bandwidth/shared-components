Alert
=====


Props
-----

Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
type|enum('info'\|'success'|'error')|'info'|No|An alert type; one of [info, success, error].
textOnly|bool|false|No|Whether to render only text (true) or an icon alongside text (false).
className|string|null|No|Additional class name to pass to the alert.
id|string|null|No|Additional id to pass to the alert.

Alerts control their own color based on `type`.

* `type`: `['info', 'success', 'error']`
* `textOnly`: `true|false`
