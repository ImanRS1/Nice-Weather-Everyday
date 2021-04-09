import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const WeatherChart = (chartData) => {
  console.log(chartData.data);

  const [a, b, c, ...rest] = chartData.data;

  console.log(a.time);

  const returnTime = (fullTime) => {
    const timeOnly = fullTime.slice(fullTime.length - 5);

    return timeOnly;
  };

  return (
    <div>
      <LineChart width={400} height={200} data={chartData.data}>
        <Line type="natural" dataKey="temp_c" stroke="#f00606" />
        <CartesianGrid stroke="#fdfdfd" />
        <XAxis dataKey="time" stroke="#fdfdfd" />
        <YAxis stroke="#fdfdfd" />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default WeatherChart;
