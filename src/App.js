import { useRef, useState } from "react";
import ReactLoading from "react-loading";
import { debounce } from "lodash";
import { createWeatherAPI } from "openweatherapi-js-sdk";
import Weather from "./components/Weather";
import SearchBar from "./components/SearchBar";

const api = createWeatherAPI("69cac80f1588f11748c177dbbdbb44dc");

function App() {
  const [weather, setWeather] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (cityName) => {
    setLoading(true);
    setError(null);
    setWeather(null);
    debounceSearch(cityName);
  };

  const debounceSearch = useRef(
    debounce((cityName) => {
      if (cityName)
        api
          .getWeatherByCityName({
            cityName,
            units: "metric",
          })
          .then((weather) => {
            setWeather(weather);
            setLoading(false);
            setError(null);
          })
          .catch((error) => {
            setLoading(false);
            setError(error.message);
            // Possible Errors
            // Network Error
            // Request failed with status code 404
          });
      else {
        setLoading(false);
        setError(null);
      }
    }, 500)
  ).current;

  const renderErrorMessage = () => {
    if (error === "Request failed with status code 404") {
      return "City not found :(";
    }
    if (error === "Network Error") {
      return "Check your internet connection";
    }
    return "Something wrong is heppening :(";
  };

  return (
    <div
      className={
        weather ? (weather.main.temp > 16 ? "app warm" : "app") : "app"
      }
    >
      <main>
        <SearchBar handleChange={handleChange} />
        {weather && (
          <Weather weather={weather} date={new Date().toLocaleString()} />
        )}

        {loading && (
          <ReactLoading
            className="loading"
            type="spinningBubbles"
            color="#ffffff"
            height={"10%"}
            width={"10%"}
          />
        )}

        {error && (
          <div className="error-box">
            <div className="error">{renderErrorMessage()}</div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
