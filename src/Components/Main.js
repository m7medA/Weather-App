import "../styles/components/Main.scss";
import WeatherContext from "../context/weather.context";
import CurrentWeather from "./MainComponent/CurrentWeather";
import Forecast from "./MainComponent/Forceast";
import Loader from "./MainComponent/Loader";
import { getHourlyForecast, getDailyForecast } from "../api";
import { useContext } from "react";

export default function Main() {
  const { loading, currentWeather, hourlyFroecast, dailyFroecast } =
    useContext(WeatherContext);

  return (
    <div className="Main">
      {loading ? (
        <Loader />
      ) : (
        <>
          <CurrentWeather data={currentWeather} />
          <Forecast
            type="hourly"
            title="HOURLY FORECAST"
            data={hourlyFroecast}
          />
          <Forecast
            type="daily"
            title="21 DAYS FORECAST"
            data={dailyFroecast}
          />
        </>
      )}
    </div>
  );
}
