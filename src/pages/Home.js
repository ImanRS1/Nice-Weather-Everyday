import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [weather, setWeather] = useState(null);
  const [weatherInput, setWeatherInput] = useState("");

  useEffect(() => {
    axios
      .get(
        "http://api.weatherapi.com/v1/current.json?key=0abe7ad125fb4e93af2141636212003&q=London&aqi=no"
      )
      .then((fetchedData) => {
        setWeather(fetchedData.data);
        console.log(fetchedData.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const getLocation = (e) => {
    setWeatherInput(e.target.value);
  };

  const searchLocation = () => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=0abe7ad125fb4e93af2141636212003&q=${weatherInput}&aqi=no`
      )
      .then((fetchedData) => {
        setWeather(fetchedData.data);
      });
  };

  return (
    <div>
      <h1>Nice Weather Everyday</h1>
      <div className="search">
        <input onChange={getLocation} type="text" />
        <button onClick={searchLocation}>Search</button>
      </div>
      {weather && (
        <div>
          <h2>
            {weather.location.name}, {weather.location.country}
          </h2>
          <div>
            <img
              src={weather.current.condition.icon}
              alt={weather.current.condition.text}
            />
            <h5>{weather.current.temp_c} degrees celcius</h5>
            <h5>{weather.location.localtime}</h5>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
