import { useContext, useState } from "react";
import ThemeContext from "../../context/theme.context";
import WeatherContext from "../../context/weather.context";
import { MEASUREMENT_SYSTEMS } from "../../constants";
import "../../styles/components/Settings.scss";

export default function Settings() {
  const [openSettings, setOpenSettings] = useState(false);
  const { dark, setDark, saveTheme } = useContext(ThemeContext);
  const { measurementSystem, setMeasurementSystem, units } =
    useContext(WeatherContext);

  function handelSetDark() {
    setDark((dark) => !dark);
    saveTheme(!dark);
  }

  function handelOpenSettings() {
    setOpenSettings((open) => !open);
  }

  function changeMeaurementSystem(system) {
    setMeasurementSystem(system);
    setOpenSettings(false);
  }

  return (
    <div className="Settings">
      <div className="theme-toggler">
        <div className="theme-buttons">
          <div
            className={`light-theme-btn ${dark ? "" : "active"}`}
            onClick={handelSetDark}
          >
            <i className={`bi bi-sun`}></i>
          </div>
          <div
            className={`dark-theme-btn ${dark ? "active" : ""}`}
            onClick={handelSetDark}
          >
            <i className="bi bi-moon"></i>
          </div>
        </div>
      </div>
      <div className="settings-btn" onClick={handelOpenSettings}>
        <i className={`bi bi-gear${openSettings ? "-fill" : ""}`}></i>
      </div>
      <div className={`settings-menu ${openSettings ? "open" : ""}`}>
        <div className="measurement-systems">
          <h4>Measurement Systems:</h4>
          <div className="systems">
            {Object.values(MEASUREMENT_SYSTEMS).map((system) => (
              <div
                className={`system ${
                  system === measurementSystem ? "active" : ""
                }`}
                key={system}
                onClick={() => changeMeaurementSystem(system)}
              >
                {system}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
