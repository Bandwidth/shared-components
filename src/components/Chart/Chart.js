import React from 'react';
import {
  PieChart,
  Pie as RechartPie,
  LineChart,
  Line as RechartLine,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from 'recharts';
import _ from 'lodash';

let counter = -1;
const defaultColors = ['#00bef0', '#00aa6c', '#e9562e', '#a95adf', '#666666'];
const getColor = () => {
  counter++;
  if (counter === defaultColors.length) {
    counter = 0;
  }
  return defaultColors[counter];
};

const Line = props => {
  const { data } = props;

  if (!data[0].name || data[0].name === '') {
    console.error('Chart Error: please check the shape of your chart data.');
  }

  const arrayOfKeys = _.pull(Object.keys(data[0]), 'name');

  return (
    <LineChart
      data={data}
      width={props.width || 600}
      height={props.height || 300}
    >
      {arrayOfKeys.map((key, i) => (
        <RechartLine
          type="monotone"
          dataKey={key}
          key={i}
          stroke={getColor()}
        />
      ))}
      {!props.hideGrid ? <CartesianGrid strokeDasharray="3 3" /> : undefined}
      {!props.hideTooltip ? <Tooltip /> : undefined}
      {!props.hideXAxis ? (
        <XAxis dataKey={props.xAxisDataKey || 'name'} />
      ) : (
        undefined
      )}
      {!props.hideYAxis ? (
        <YAxis dataKey={props.yAxisDataKey || undefined} />
      ) : (
        undefined
      )}
      {!props.hideLegend ? <Legend /> : undefined}
    </LineChart>
  );
};

const Pie = props => {
  const data01 = [
    {
      name: 'Group A',
      value: 400,
    },
    {
      name: 'Group B',
      value: 300,
    },
    {
      name: 'Group C',
      value: 300,
    },
    {
      name: 'Group D',
      value: 200,
    },
    {
      name: 'Group E',
      value: 278,
    },
    {
      name: 'Group F',
      value: 189,
    },
  ];
  const data02 = [
    {
      name: 'Group A',
      value: 2400,
    },
    {
      name: 'Group B',
      value: 4567,
    },
    {
      name: 'Group C',
      value: 1398,
    },
    {
      name: 'Group D',
      value: 9800,
    },
    {
      name: 'Group E',
      value: 3908,
    },
    {
      name: 'Group F',
      value: 4800,
    },
  ];

  return (
    <PieChart width={600} height={300}>
      <RechartPie
        data={data01}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={50}
        fill="#8884d8"
      />
      <RechartPie
        data={data02}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        fill="#82ca9d"
        label
      />
      <Tooltip />,
      <Legend />,
    </PieChart>
  );
};

export default { Line, Pie };
