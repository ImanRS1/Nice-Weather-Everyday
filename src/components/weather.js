import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import Windy from "./windy";

const Weather = ({
  weather,
  location,
  country,
  conditionIcon,
  conditionText,
  wind,
}) => {
  return (
    <WeatherContainer>
      <AnimatePresence>
        <motion.div>
          <h2>
            The current weather in {location} - {country}, is {weather} &#176;C.
          </h2>
          <Condition>
            <img src={conditionIcon} alt={conditionText} />
            <h2>{conditionText}</h2>
            <Windy wind={wind} />
            <h2> {wind} mph</h2>
          </Condition>
        </motion.div>
      </AnimatePresence>
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
