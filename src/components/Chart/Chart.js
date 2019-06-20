import React from 'react';
import {
  PieChart,
  Pie as RechartPie,
  LineChart,
  Line as RechartLine,
  AreaChart,
  Area as RechartArea,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from 'recharts';
import _ from 'lodash';
import styled from 'styled-components';
import Card from '../Card';
import PropTypes from 'prop-types';

const ChartCard = styled(Card)`
  width: auto;
  display: inline-block;

  .line-chart {
    margin: 15px 30px 15px 0px;
  }
  .pie-chart {
    margin: 15px 30px;
  }
`;

let colorCounter;
const getColor = () => {
  const defaultColors = ['#00bef0', '#00aa6c', '#e9562e', '#a95adf', '#666666'];

  if (colorCounter === undefined || colorCounter == defaultColors.length)
    colorCounter = 0;
  else colorCounter++;
  return defaultColors[colorCounter];
};

const Line = props => {
  const { data } = props;

  const arrayOfKeys = _.pull(Object.keys(data[0]), 'name');

  return (
    <LineChart
      data={data}
      width={props.width || 500}
      height={props.height || 300}
      className="line-chart"
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
      {!props.hideLegend ? (
        <Legend verticalAlign="top" height={36} />
      ) : (
        undefined
      )}
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
    <PieChart
      width={props.width || 500}
      height={props.height || 300}
      className="pie-chart"
    >
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

const Area = props => {
  const { data } = props;

  const arrayOfKeys = _.pull(Object.keys(data[0]), 'name');

  return (
    <AreaChart
      data={data}
      width={props.width || 500}
      height={props.height || 300}
      className="line-chart"
    >
      <defs>
        {arrayOfKeys.map((key, i) => {
          const thisColor = getColor();

          return (
            <linearGradient
              id={`color-${key}`}
              x="0"
              y1="0"
              x2="0"
              y2="1"
              key={i}
            >
              <stop offset="5%" stopColor={thisColor} stopOpacity={0.8} />
              <stop offset="95%" stopColor={thisColor} stopOpacity={0} />
            </linearGradient>
          );
        })}
      </defs>
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
      {!props.hideGrid ? <CartesianGrid strokeDasharray="3 3" /> : undefined}
      {!props.hideTooltip ? <Tooltip /> : undefined}
      {!props.hideLegend ? (
        <Legend verticalAlign="top" height={36} />
      ) : (
        undefined
      )}
      {arrayOfKeys.map((key, i) => {
        let color = getColor();
        if (color === undefined) color = '#ff0000';
        console.log(key, i, color);

        return (
          <RechartArea
            type="monotone"
            dataKey={key}
            stroke={color}
            fillOpacity={1}
            key={i}
          />
        );
      })}
    </AreaChart>
  );
};

const Chart = { ChartCard, Line, Pie, Area };

/**
 * @component
 */
export default Chart;
