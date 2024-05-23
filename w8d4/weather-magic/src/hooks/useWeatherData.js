import { useState } from "react";

export default function useWeatherData() {
  const [weatherData, setWeatherData] = useState(null);
  const [cityHistory, setCityHistory] = useState([]);

  const fetchWeatherData = (city) => {
    // API CALL
    // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    // 09fd719b4b698ec0260e424f83378e3d
    const apiKey = "09fd719b4b698ec0260e424f83378e3d";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    return fetch(url).then((res) => {
      if (!res.ok) {
        throw new Error("Something went wrong with request");
      }

      return res.json();
    });
  };

  const updateWeatherInfo = (city) => {
    setTimeout(() => {

      fetchWeatherData(city)
      .then((data) => {
        setWeatherData({...data, currentCity:city});
        !cityHistory.includes(city) && setCityHistory([...cityHistory, city]);
      })
      .catch((err) => {
        console.log(err);
        setWeatherData(null);
      });
    }, 4000)
  };

  return { weatherData, cityHistory, updateWeatherInfo };
}
