const Weather = ({ weather, location, country }) => {
  return (
    <div>
      <h3>
        The current weather in {location}, {country} is {weather}.
      </h3>
    </div>
  );
};

export default Weather;
