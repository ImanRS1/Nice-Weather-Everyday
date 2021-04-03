const Weather = ({ weather, location, country }) => {
  return (
    <div>
      <h2>
        The current weather in {location} - {country}, is {weather} degrees celcius.
      </h2>
    </div>
  );
};

export default Weather;
