import "./App.scss";
import Header from "./components/Header";
import CityForm from "./components/CityForm";
import CityList from "./components/CityList";
import CurrentWeather from "./components/CurrentWeather";
import useWeatherData from "./hooks/useWeatherData";
import useWow from "./hooks/useWow"

function App() {
  const { weatherData, cityHistory, updateWeatherInfo } = useWeatherData();
  const { sayWow } = useWow();

  const handleSubmit = (formData) => {
    sayWow();
    updateWeatherInfo(formData.city);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <CityForm onSubmit={handleSubmit} />
        <CityList cityHistory={cityHistory} onClick={updateWeatherInfo} />
        {weatherData && <CurrentWeather weatherData={weatherData} />}
      </main>
    </div>
  );
}

export default App;
