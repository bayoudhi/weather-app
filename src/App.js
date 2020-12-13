import { useRef, useState } from "react";

import { debounce } from "lodash";

import "./App.css";
import { createWeatherAPI } from "openweatherapi-js-sdk";

const api = createWeatherAPI("69cac80f1588f11748c177dbbdbb44dc");

function App() {
  const [weather, setWeather] = useState();
  const [cityName, setCityName] = useState("");

  const handleChange = (e) => {
    setCityName(e.target.value);
    debounceSearch(e.target.value);
  };

  const debounceSearch = useRef(
    debounce((cityName) => {
      if (cityName)
        api
          .getWeatherByCityName({
            cityName: cityName,
            units: "metric",
          })
          .then((weather) => setWeather(weather))
          .catch((error) => {
            setWeather(null);
            console.error(error);
          });
    }, 500)
  ).current;

  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            onChange={handleChange}
            value={cityName}
            type="text"
            className="search-bar"
            placeholder="Search..."
          />
        </div>
        {weather ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{new Date().toLocaleString()}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{weather.main.temp}°c</div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;
