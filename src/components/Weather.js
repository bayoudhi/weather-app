import './Weather.css'

function Weather({ weather,date }) {
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
        {/* <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              width="50px"
              height="50px"
            /> */}
      </div>
    </div>
  );
}

export default Weather;
