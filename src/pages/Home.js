import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadLocation } from "../actions/locationAction";
import Weather from "../components/weather";
import Header from "../components/header";
import Forecast from "../components/forecast";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { v4 as uudv4 } from "uuid";
import DayOrNightPicker from "../components/dayOrnightPicker";
import { fadeInAnim, fadeInAnim3, fadeInAnim2 } from "../animations";

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
  console.log(searchedLocation);
  const forecast = useSelector((state) => state.location.searchedForecast);

  return (
    <div>
      <HomeContainer>
        {typeof searchedLocation !== "undefined" ? (
          <div>
            <Header dayornight={searchedCurrent.is_day} />
            <AnimatePresence exitBeforeEnter>
              <motion.div
                variants={fadeInAnim3}
                initial="hidden"
                animate="show"
                exit="exit"
                key={uudv4()}
              >
                <Weather
                  weather={searchedCurrent.temp_c}
                  location={searchedLocation.name}
                  country={searchedLocation.country}
                  condition={searchedCurrent.condition}
                  conditionText={searchedCurrent.condition.text}
                  conditionIcon={searchedCurrent.condition.icon}
                  wind={searchedCurrent.wind_mph}
                  chartData={forecast[0].hour}
                  key={uudv4()}
                />
              </motion.div>
            </AnimatePresence>
            <ForecastItem>
              {forecast.map((thisForecast) => (
                <AnimatePresence exitBeforeEnter>
                  <motion.div
                    variants={fadeInAnim2}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    key={uudv4()}
                  >
                    <Forecast
                      date={thisForecast.date}
                      sunrise={thisForecast.astro.sunrise}
                      sunset={thisForecast.astro.sunset}
                      weather={thisForecast.day.avgtemp_c}
                      condition={thisForecast.day.condition}
                    />
                  </motion.div>
                </AnimatePresence>
              ))}
            </ForecastItem>
          </div>
        ) : (
          <AnimatePresence exitBeforeEnter>
            <Header dayornight={"1"} />
            <motion.div
              variants={fadeInAnim}
              initial="hidden"
              animate="show"
              exit="exit"
              key={uudv4()}
            >
              <Weather
                weather={23}
                location={"a nice place"}
                country={" somewhere on earth"}
                conditionIcon={"//cdn.weatherapi.com/weather/64x64/day/113.png"}
                conditionText={"Sunny & Nice"}
                wind={"2"}
                key={uudv4()}
              />
            </motion.div>
          </AnimatePresence>
        )}
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
