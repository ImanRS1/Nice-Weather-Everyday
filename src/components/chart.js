import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";
import { motion } from "framer-motion";

const WeatherChart = (chartData) => {
  console.log(chartData.data);

  const [a, b, c, ...rest] = chartData.data;

  console.log(a.time.length);

  const returnTime = (fullTime) => {
    const timeOnly = fullTime.slice(fullTime.length - 5);

    return timeOnly;
  };
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      console.log(label);
      const slimmedTime = returnTime(label);

      return (
        <CustomToolTip>
          <p className="temp">{`${payload[0].value}`} &#176;C</p>
          <p className="time">{`${slimmedTime}`}</p>
        </CustomToolTip>
      );
    }

    return null;
  };

  return (
    <div>
      <LineChart width={350} height={200} data={chartData.data}>
        <Line
          type="natural"
          dataKey="temp_c"
          stroke="#f00606"
          dot={false}
          animationDuration="4000"
        />
        <CartesianGrid stroke="rgba(5, 5, 5, 0)" />
        <XAxis
          tick={false}
          dataKey="time"
          stroke="#fefefe"
          label={{ value: "Time", stroke: "#fefefe" }}
        />
        <YAxis stroke="#fdfdfd" />
        <Tooltip content={<CustomTooltip />} />
      </LineChart>
    </div>
  );
};

const CustomToolTip = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: centeR;
  p {
    margin: 0;
  }
  .temp {
    font-weight: bold;
  }
  .time {
    font-weight: lighter;
  }
`;

export default WeatherChart;
