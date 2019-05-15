Charts powered by [Recharts](http://recharts.org/en-US/api).

### Line Chart

```javascript
<Chart.Line
  data={[
    {
      name: 'Page A',
      example: 100,
      random: Math.floor(Math.random() * 1000),
    },
    {
      name: 'Page B',
      example: 250,
      random: Math.floor(Math.random() * 1000),
    },
    {
      name: 'Page C',
      example: 500,
      random: Math.floor(Math.random() * 1000),
    },
    {
      name: 'Page D',
      example: 750,
      random: Math.floor(Math.random() * 1000),
    },
    {
      name: 'Page E',
      example: 900,
      random: Math.floor(Math.random() * 1000),
    },
  ]}
  xAxisDatKey="name"
/>
```

### Pie Chart

```javascript
<Chart.Pie />
```
