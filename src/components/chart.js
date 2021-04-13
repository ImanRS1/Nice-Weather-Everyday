import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
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
      console.log(payload);

      return (
        <CustomToolTip>
          <p className="time">{`${slimmedTime} `}</p>
          <div className="time-and-condition">
            <p className="temp">{`${payload[0].value}`}&#176;C</p>
            <img src={`${payload[0].payload.condition.icon}`} />
          </div>
        </CustomToolTip>
      );
    }

    return null;
  };

  return (
    <ChartContainer>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          data={chartData.data}
          margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
          className="theChart"
        >
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
      </ResponsiveContainer>
    </ChartContainer>
  );
};

const ChartContainer = styled(motion.div)`
  width: 500px;
  @media screen and (max-width: 900px) {
    padding-right: 2.5rem;
  }

  @media screen and (max-width: 650px) {
    width: 80vw;
  }
`;

const CustomToolTip = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    margin: 0;
  }

  .time-and-condition {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 3rem;
      height: 3rem;
    }
  }
`;

export default WeatherChart;
