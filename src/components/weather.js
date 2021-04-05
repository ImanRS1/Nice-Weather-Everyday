import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeInAnim } from "../animations";

const Weather = ({
  weather,
  location,
  country,
  conditionIcon,
  conditionText,
}) => {
  return (
    <WeatherContainer>
      <motion.div variants={fadeInAnim} initial="hidden" animate="show">
        <h2>
          The current weather in {location} - {country}, is {weather} &#176;C.
        </h2>

        <Condition>
          <img src={conditionIcon} />
          <h2>{conditionText}</h2>
        </Condition>
      </motion.div>
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
