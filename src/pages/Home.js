import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadLocation } from "../actions/locationAction";
import Weather from "../components/weather";
import Header from "../components/header";
import Forecast from "../components/forecast";

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

  /*   if (forecast === "undefined") {
    const mapForecast = forecast.map(console.log(forecast));
  } */

  /* 
  const fetchedLocation = useSelector((state) => state.location.location);
  const fetchedCurrent = useSelector((state) => state.location.current); */

  return (
    <div>
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
          {forecast.map((thisForecast) => (
            /*  console.log(thisForecast) */
            <Forecast
              date={thisForecast.date}
              sunrise={thisForecast.astro.sunrise}
              sunset={thisForecast.astro.sunset}
              weather={thisForecast.day.avgtemp_c}
              key={thisForecast.date}
              condition={thisForecast.day.condition}
            />
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
