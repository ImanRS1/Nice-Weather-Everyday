import sunriseImage from "../images/sunrise.svg";
import sunsetImage from "../images/sunset.svg";
import styled from "styled-components";
import { motion } from "framer-motion";

const Forecast = ({ sunrise, sunset, date, weather, condition }) => {
  return (
    <div>
      <ForeCastItem>
        <h3>
          {date}
          <div>Temperature: {weather} degrees celcius.</div>
          <SunRiseAndSet>
            <img src={sunriseImage} />
            {sunrise}
            <img src={sunsetImage} />
            {sunset}
          </SunRiseAndSet>
          Condition: {condition.text}
        </h3>
      </ForeCastItem>
    </div>
  );
};

const ForeCastItem = styled(motion.div)`
  margin: 2rem;
`;

const SunRiseAndSet = styled(motion.div)`
  display: flex;
  align-items: center;
  img {
    padding: 0.5rem;
    height: 2rem;
    width: 2rem;
  }
`;

export default Forecast;
