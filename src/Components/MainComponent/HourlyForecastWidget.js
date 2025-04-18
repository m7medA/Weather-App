import { useContext } from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherContext from "../../context/weather.context";

export default function HourlyForecastWidget({ data }) {
  const { date, icon, precipitation, summary, temperature, wind } = data;
  const { units } = useContext(WeatherContext);

  //date format
  const now_date = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    }).format(new Date()),
    time: new Intl.DateTimeFormat(navigator.language, {
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date().setMinutes(0)),
  };

  const weather_date = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    }).format(new Date(date)),
    time: new Intl.DateTimeFormat(navigator.language, {
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(date).setMinutes(0)),
  };

  weather_date.day =
    weather_date.day === now_date.day && weather_date.time === now_date.time
      ? "Today"
      : weather_date.time === "00:00"
      ? weather_date.day
      : "";

  return (
    <div className="widget">
      <div className="day">{weather_date.day}</div>
      <div className="time">{weather_date.time}</div>
      <div className="icon">
        <WeatherIcon iconNumber={icon} alt={summary} />
      </div>
      <div className="temperature">
        {Math.round(temperature)} {units.temperature}
      </div>
      <div className="precipitation">
        {Math.round(precipitation.total)} {units.precipitation}
      </div>
      <div className="wind">
        <div className="speed">
          {Math.round(wind.speed)} {units.wind_speed}
        </div>
        <div
          className="dir"
          style={{ transform: `rotate(${-45 + wind.angle}deg)` }}
        >
          <i className="bi bi-send-fill"></i>
        </div>
      </div>
    </div>
  );
}
