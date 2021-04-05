import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadLocation } from "../actions/locationAction";
import Weather from "../components/weather";
import Header from "../components/header";
import Forecast from "../components/forecast";
import styled from "styled-components";
import { motion } from "framer-motion";
import DayOrNightPicker from "../components/dayOrnightPicker";
import { fadeInAnim, fadeInAnim2, animStagger } from "../animations";

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
        <motion.div variants={fadeInAnim} initial="hidden" animate="show">
          {typeof searchedLocation !== "undefined" ? (
            <div>
              <Weather
                weather={searchedCurrent.temp_c}
                location={searchedLocation.name}
                country={searchedLocation.country}
                condition={searchedCurrent.condition}
                conditionText={searchedCurrent.condition.text}
                conditionIcon={searchedCurrent.condition.icon}
              />
              <ForecastItem>
                {forecast.map((thisForecast) => (
                  <motion.div
                    variants={fadeInAnim2}
                    initial="hidden"
                    animate="show"
                  >
                    <Forecast
                      date={thisForecast.date}
                      sunrise={thisForecast.astro.sunrise}
                      sunset={thisForecast.astro.sunset}
                      weather={thisForecast.day.avgtemp_c}
                      key={thisForecast.date}
                      condition={thisForecast.day.condition}
                    />
                  </motion.div>
                ))}
              </ForecastItem>
            </div>
          ) : (
            <div>
              <Weather
                weather={23}
                location={"a nice place"}
                country={" somewhere on earth"}
                conditionIcon={"//cdn.weatherapi.com/weather/64x64/day/113.png"}
                conditionText={"Sunny & Nice"}
              />
            </div>
          )}
        </motion.div>
      </HomeContainer>

      <HomeBackground>
        {typeof searchedLocation !== "undefined" ? (
          <DayOrNightPicker dayornight={searchedCurrent.is_day} />
        ) : (
          <DayOrNightPicker dayornight={"1"} />
        )}
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
  transition: all 0.5s ease;
`;

const HomeBackground = styled(motion.div)`
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
`;

export default Home;
