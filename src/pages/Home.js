import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadLocation } from "../actions/locationAction";
import Weather from "../components/weather";
import Header from "../components/header";
import Forecast from "../components/forecast";
import Moon from "../components/moon";
import Sun from "../components/sun";
import styled from "styled-components";
import { motion } from "framer-motion";
import backGroundPicNight from "../images/d1.png";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadLocation());
  }, [dispatch]);

  const searchedLocation = useSelector(
    (state) => state.location.searchedLocation
  );

  const searchedCurrent = useSelector(
    (state) => state.location.searchedCurrent
  );

  console.log(searchedCurrent);

  const forecast = useSelector((state) => state.location.searchedForecast);

  return (
    <div>
      <HomeContainer>
        <Header />

        {typeof searchedLocation !== "undefined" ? (
          <Weather
            weather={searchedCurrent.temp_c}
            location={searchedLocation.name}
            country={searchedLocation.country}
            condition={searchedCurrent.condition}
            conditionText={searchedCurrent.condition.text}
            conditionIcon={searchedCurrent.condition.icon}
          />
        ) : (
          ""
        )}

        {typeof searchedLocation === "undefined" ? (
          <Weather
            weather={23}
            location={"a nice place"}
            country={" somewhere on earth"}
            conditionIcon={"//cdn.weatherapi.com/weather/64x64/day/113.png"}
            conditionText={"Sunny & Nice"}
          />
        ) : (
          ""
        )}

        {typeof forecast !== "undefined" ? (
          <div>
            <ForecastItem>
              {forecast.map((thisForecast) => (
                <Forecast
                  date={thisForecast.date}
                  sunrise={thisForecast.astro.sunrise}
                  sunset={thisForecast.astro.sunset}
                  weather={thisForecast.day.avgtemp_c}
                  key={thisForecast.date}
                  condition={thisForecast.day.condition}
                />
              ))}
            </ForecastItem>
          </div>
        ) : (
          ""
        )}
      </HomeContainer>

      <HomeBackground>
        <img className="background-pic" src={backGroundPicNight} />
        <div className="planet-container">
          <Sun />
        </div>
      </HomeBackground>
    </div>
  );
};

const ForecastItem = styled(motion.div)`
  display: flex;
`;

const HomeContainer = styled(motion.div)`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 98vh;
  color: #fefefe;
  z-index: 2;
  position: relative;
`;

const HomeBackground = styled(motion.div)`
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  height: 100vh;
  width: 100vw;

  .planet-container {
    img {
      border-radius: 50%;
      box-sizing: border-box;
      position: absolute;
      top: -70px;
      right: -79px;
      width: 20%;
      height: 35%;
    }
  }
  .background-pic {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    object-fit: cover;
  }
`;

export default Home;
