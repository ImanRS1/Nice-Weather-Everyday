import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import styled from "styled-components";
import { motion } from "framer-motion";

const WeatherChart = (chartData) => {

  const returnTime = (fullTime) => {
    const timeOnly = fullTime.slice(fullTime.length - 5);

    return timeOnly;
  };


  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
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
      <LineChart width={350} height={200} data={chartData.data} margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
        <Line
          type="natural"
          dataKey="temp_c"
          stroke="#f00606"
          dot={false}
          animationDuration={4000}
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
