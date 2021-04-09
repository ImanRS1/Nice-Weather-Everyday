import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const WeatherChart = (chartData) => {
  console.log(chartData);

  const data = [
    {
      name: "Page A",
      uv: 1000,
    },
    {
      name: "Page B",
      uv: 3000,
    },
    {
      name: "Page C",
      uv: 2000,
    },
    {
      name: "Page D",
      uv: 2780,
    },
    {
      name: "Page E",
      uv: -1890,
    },
    {
      name: "Page F",
      uv: 2390,
    },
    {
      name: "Page G",
      uv: 2000,
    },
  ];

  return (
    <div>
      <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#f00606" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </div>
  );
};

export default WeatherChart;
