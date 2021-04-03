import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadLocation } from "../actions/locationAction";
import Weather from "../components/weather";
import Header from "../components/header";

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

  console.log(forecast);

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

      {/*  <Weather
        weather={fetchedCurrent.temp_c}
        location={fetchedLocation.name}
        country={fetchedLocation.country}
      /> */}
    </div>
  );
};

export default Home;
