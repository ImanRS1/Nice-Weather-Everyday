import styled from "styled-components";
import { motion } from "framer-motion";
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
      <div className="mainWeatherInfo">
        <h2>
          The current weather in {location} - {country}, is{" "}
          <span className="degreesCelcius">{weather}&#176;C</span>.
        </h2>
      </div>
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

  @media screen and (max-width: 415px) {
    img {
      height: 4rem;
      width: auto;
    }
    .conditionHolder {
      padding: 0;
    }
  }
`;

const WeatherContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .degreesCelcius {
    text-decoration: underline;
    text-decoration-color: #ff5252;
    text-underline-offset: 0.2rem;
    /*  border-bottom: 3px solid #ff5252;
    padding-bottom: 1px; */
  }

  @media screen and (max-width: 900px) {
    h2 {
      font-size: 1.2rem;
    }
  }

  @media screen and (max-width: 650px) {
    width: 90vw;
    h2 {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 415px) {
    .mainWeatherInfo {
      text-align: center;
    }
  }
`;

export default Weather;
