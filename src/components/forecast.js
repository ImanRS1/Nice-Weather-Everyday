import sunriseImage from "../images/sunrise.svg";
import sunsetImage from "../images/sunset.svg";
import styled from "styled-components";
import { motion } from "framer-motion";

const Forecast = ({ sunrise, sunset, date, weather, condition }) => {
  return (
    <div>
      <ForeCastItem>
        {date}
        <div>Temperature: {weather} degrees celcius.</div>
        <SunRiseAndSet>
          <img src={sunriseImage} />
          {sunrise}
          <img src={sunsetImage} />
          {sunset}
        </SunRiseAndSet>
        <Condition>
          <img src={condition.icon} />
          {condition.text}
        </Condition>
      </ForeCastItem>
    </div>
  );
};

const Condition = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ForeCastItem = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 1rem;
  padding: 0.5rem;
  background-color: rgba(5, 5, 5, 0.15);
  box-shadow: 5px 10px 18px #2b2b2b;
  height: 10rem;
  width: 15rem;
  h3 {
    margin: 0;
  }
`;

const SunRiseAndSet = styled(motion.div)`
  display: flex;
  align-items: center;

  img {
    margin: 0.1rem;
    padding: 0.5rem;
    height: 2rem;
    width: 2rem;
  }
`;

export default Forecast;
