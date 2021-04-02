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

  const fetchedLocation = useSelector((state) => state.location.location);
  const fetchedCurrent = useSelector((state) => state.location.current);

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

  /* 
  const [weather, setWeather] = useState(null);
  const [weatherInput, setWeatherInput] = useState("");

  useEffect(() => {

    //kolla upp ip lookup API på weatherapi
    axios
      .get(
        "http://api.weatherapi.com/v1/current.json?key=0abe7ad125fb4e93af2141636212003&q=London"
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
        `http://api.weatherapi.com/v1/current.json?key=0abe7ad125fb4e93af2141636212003&q=${weatherInput}`
      )
      .then((fetchedData) => {
        setWeather(fetchedData.data);
        console.log(fetchedData.data);
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
  ); */
};

export default Home;
