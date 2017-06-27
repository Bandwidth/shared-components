CodeBlock
=========


Props
-----

Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
children|node||Yes|Code to render inside the code block.
language|string|'javascript'|No|Controls the syntax highlighting language.
className|string||No|Adds a class name to the code block container element.
id|string||No|Adds an id to the code block container element.

Applies styling to render code on the page. Supports multiline only (use InlineCode for single line).

```
<CodeBlock>
Some complex
CodeBlock here
</CodeBlock>
```
