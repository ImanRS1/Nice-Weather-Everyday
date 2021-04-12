import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import Windy from "./windy";
import WeatherChart from "./chart";

const Weather = ({
  weather,
  location,
  country,
  conditionIcon,
  conditionText,
  wind,
  chartData,
}) => {
  return (
    <WeatherContainer>
      <h2>
        The current weather in {location} - {country}, is {weather} &#176;C.
      </h2>
      <Condition>
        <div className="conditionContainer">
          <div className="conditionHolder">
            <img src={conditionIcon} alt={conditionText} />
            <h2>{conditionText}</h2>
          </div>

          <div className="conditionHolder">
            <Windy wind={wind} />
            <h2> {wind} mph</h2>
          </div>
        </div>
        {location === "a nice place" ? "" : <WeatherChart data={chartData} />}
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

  .conditionHolder {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;

    .conditionHolder {
      padding: 0 1rem;
    }
    .conditionContainer {
      display: flex;
    }
  }
`;

const WeatherContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 900px) {
    h2 {
      font-size: 1.2rem;
    }
  }
`;

export default Weather;
