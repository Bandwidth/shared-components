```js
<div>
  <Foreground>
    <div
      style={{
        position: 'absolute',
        left: '50%',
        bottom: '20px',
        transform: 'translateX(-50%)',
        background: 'var(--colors-primary-default)',
        color: 'var(--colors-text-inverted)',
        padding: '8px',
        boxShadow: 'var(--shadows-short)',
        borderRadius: '4px',
      }}
    >
      Hi there! This component will render above everything else.
    </div>
  </Foreground>
  <div>
    <Icon name="down" /> The foreground element is the blue box below{' '}
    <Icon name="down" />
  </div>
</div>
```
