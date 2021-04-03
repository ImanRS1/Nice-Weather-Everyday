import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadLocation } from "../actions/locationAction";
import Weather from "../components/weather";
import Header from "../components/header";
import Forecast from "../components/forecast";
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
          />
        ) : (
          ""
        )}

        {typeof searchedLocation === "undefined" ? (
          <Weather
            weather={23}
            location={"a nice city"}
            country={" somewhere on earth"}
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
        <img src={backGroundPicNight} />
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
  background-color: #64a4f8;
  z-index: 0;
  overflow: hidden;
  img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    object-fit: cover;
  }
`;

export default Home;
