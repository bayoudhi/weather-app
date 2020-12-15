import * as React from "react";
import "./Weather.css";

/**
 *
 * @param {Object} Props
 * @param {Weather} Props.weather
 * @param {string} Props.date
 */
function Weather({ weather, date }) {
  return (
    <div>
      <div className="location-box">
        <div className="location">
          {weather.name}, {weather.sys.country}
        </div>
        <div className="date">{date}</div>
      </div>
      <div className="weather-box">
        <div className="temp">{weather.main.temp}°c</div>

        <div className="weather">{weather.weather[0].main}</div>
      </div>
    </div>
  );
}

export default Weather;
