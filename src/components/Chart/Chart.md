Charts powered by [Recharts](http://recharts.org/en-US/api).

### Area Chart

```javascript
<Chart.Area
  data={[
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ]}
  xAxisDataKey="name"
/>
```

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
  xAxisDataKey="name"
/>
```

### Pie Chart

```javascript
<Chart.ChartCard>
  <Chart.Pie />
</Chart.ChartCard>
```
