```javascript
<div style={{ width: '240px' }}>
  <P>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
  </P>
</div>
```

Paragraphs are vertically aligned based on the cap and base lines of the text. They support the `spacing` property, which allows a user to specify custom spacing around the component.

```javascript
<div style={{ width: '240px' }}>
  <div style={{ background: 'rgba(255, 0, 0, 0.25)', height: '1px', width: '240px' }} />
  <div style={{ borderBottom: '1px dashed rgba(0, 0, 255, 0.25)', height: '1px', width: '240px', position: 'relative', top: '30px' }} />
  <P spacing="lg">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
  </P>
  <div style={{ borderBottom: '1px dashed rgba(0, 0, 255, 0.25)', height: '1px', width: '240px', position: 'relative', bottom: '30px' }} />
  <div style={{ background: 'rgba(255, 0, 0, 0.25)', height: '1px', width: '240px' }} />
</div>
```
