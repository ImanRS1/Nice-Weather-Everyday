const Forecast = ({ sunrise, sunset, date, weather, condition }) => {
  return (
    <div>
      <h3>
        {date}
        <div>Temperature: {weather} degrees celcius.</div>
        <div>
          Sunrise: {sunrise} - Sunset: {sunset}
        </div>
        Condition: {condition.text}
      </h3>
    </div>
  );
};

export default Forecast;
