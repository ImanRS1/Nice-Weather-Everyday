const Forecast= ({ weather, location, country }) => {
    return (
      <div>
        <h3>
          FORECAS: The current weather in {location} - {country}, is {weather} degrees celcius.
        </h3>
      </div>
    );
  };
  
  export default Forecast;
  