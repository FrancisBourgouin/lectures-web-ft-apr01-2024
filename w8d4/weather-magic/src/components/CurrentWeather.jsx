export default function CurrentWeather(props) {
  const { weatherData } = props;

  const description = weatherData.weather[0].description;
  const temp = Math.round(weatherData.main.temp - 273.15);

  return (
    <section className="CurrentWeather">
      <h1>It is currently {temp}°C</h1>
      <p>
        The conditions are: {description} for {weatherData.currentCity}
      </p>
    </section>
  );
}
