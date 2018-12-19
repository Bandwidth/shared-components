Skeleton.Group defines a section that pulses together. Typically you can use it to define a block of Skeletons that are grouped together in some way. It also allows for easy repetition of Skeletons so that you don't have to manually create enough skeletons instances.

#### Basic

```js
<Skeleton.Group count={4}>
  <Skeleton />
</Skeleton.Group>
```

#### Rows

Give Skeleton.Group a `count` and it will repeat its children that many times.

```js
<Skeleton.Group count={4}>
  <Skeleton width="25px" height="25px" />
  <Skeleton style={{ marginLeft: '15px' }} width="400px" height="25px" />
</Skeleton.Group>
```

#### Horizontal

Use other layout components to lay your skeletons out in a logical manner.

```js
<Horizontal>
  <Skeleton.Group count={8}>
    <Skeleton width="50px" height="50px" borderRadius="50px" />
  </Skeleton.Group>
</Horizontal>
```

#### Unique

Multiple adjacent skeleton groups will animate in a staggered fashion, regardlesss of their contents.

```js
  <Skeleton.Group>
    <Skeleton width="100%" height="50px" borderRadius="50px" />
    <Skeleton width="100%" height="50px" borderRadius="50px" />
    <Skeleton width="100%" height="50px" borderRadius="50px" />
  </Skeleton.Group>
  <Skeleton.Group width="300px">
    <Skeleton width="100%" height="50px" borderRadius="50px" />
    <Skeleton width="100%" height="50px" borderRadius="50px" />
  </Skeleton.Group>
  <Skeleton.Group width="100px">
    <Skeleton width="100%" height="50px" borderRadius="50px" />
  </Skeleton.Group>
```
