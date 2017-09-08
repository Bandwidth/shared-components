Flow.Row is designed to be used with 2 children:

\`\`\`\
<Flow.Row>
  <Flow.Item>foo</Flow.Item>
  <Flow.Item>bar</Flow.Item>
</Flow.Row>
\`\`\`

You can still add more than 2 children to Flow.Row and it will try to lay them out gracefully.

\`\`\`
<Flow.Row>
  <Flow.Item>all</Flow.Item>
  <Flow.Item>the same</Flow.Item>
  <Flow.Item>size</Flow.Item>
</Flow.Row>
\`\`\`

You can use the \`sizes\` prop to have more control over item sizes:

\`\`\`
<Flow.Row sizes={[1, 8]}>
  <Flow.Item>small</Flow.Item>
  <Flow.Item>BIG!</Flow.Item>
</Flow.Row>
\`\`\`

You can also change the way items are aligned:

\`\`\`
<Flow.Row alignment="left">
  <Flow.Item>These are on the</Flow.Item>
  <Flow.Item>Left!</Flow.Item>
</Flow.Row>
\`\`\`

Flow.Row can achieve some pretty complex layouts with nesting and its props:

\`\`\`
<Flow.Row>
  <Flow.Item>foo</Flow.Item>
  <Flow.Row alignment="left">
    <Flow.Item>these will be</Flow.Item>
    <Flow.Item>pushed up against the center</Flow.Item>
  </Flow.Row>
</Flow.Row>
\`\`\`
