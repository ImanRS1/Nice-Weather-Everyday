import styled from "styled-components";
import { motion } from "framer-motion";

const Weather = ({
  weather,
  location,
  country,
  conditionIcon,
  conditionText,
}) => {
  return (
    <WeatherContainer>
      <h2>
        The current weather in {location} - {country}, is {weather} &#176;C.
      </h2>

      <Condition>
        <img src={conditionIcon} />
        <h2>{conditionText}</h2>
      </Condition>
    </WeatherContainer>
  );
};

const Condition = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 7rem;
    width: auto;
  }
`;

const WeatherContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Weather;
