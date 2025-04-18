import { createContext, useEffect, useState } from "react";
import { DEFAULT_PLACE, MEASUREMENT_SYSTEMS, UNITS } from "../constants";
import { getWeatherData } from "../api/index";

const WeatherContext = createContext();

function WeatherProvider({ children }) {
  const [place, setPlace] = useState(DEFAULT_PLACE);
  const [loading, setLoading] = useState(true);
  const [currentWeather, setCurrentWeather] = useState({});
  const [hourlyFroecast, setHourlyFroecast] = useState([]);
  const [dailyFroecast, setDailyFroecast] = useState([]);
  const [measurementSystem, setMeasurementSystem] = useState(
    MEASUREMENT_SYSTEMS.AUTO
  );
  const [units, setUnits] = useState({});

  useEffect(() => {
    async function _getWeatherData() {
      setLoading(true);

      const cw = await getWeatherData(
        "current",
        place.place_id,
        measurementSystem
      );
      setCurrentWeather(cw.current);
      setUnits(UNITS[cw.units]);

      const hf = await getWeatherData(
        "hourly",
        place.place_id,
        measurementSystem
      );
      setHourlyFroecast(hf.hourly.data);

      const df = await getWeatherData(
        "daily",
        place.place_id,
        measurementSystem
      );
      setDailyFroecast(df.daily.data);

      setLoading(false);
    }

    _getWeatherData();
  }, [place, measurementSystem]);

  return (
    <WeatherContext.Provider
      value={{
        place,
        setPlace,
        loading,
        currentWeather,
        hourlyFroecast,
        dailyFroecast,
        measurementSystem,
        setMeasurementSystem,
        units,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export { WeatherProvider };
export default WeatherContext;
