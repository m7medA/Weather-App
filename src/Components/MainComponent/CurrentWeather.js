import { useContext, useEffect, useState } from "react";
import "../../styles/components/CurrentWeather.scss";
import { getCurrentWeather } from "../../api";
import WeatherIcon from "./WeatherIcon";
import WeatherContext from "../../context/weather.context";

export default function CurrentWeather({ data }) {
  const {
    cloud_cover,
    feels_like,
    humidity,
    icon_num,
    precipitation,
    summary,
    temperature,
    uv_index,
    visibility,
    wind,
  } = data;

  const { units } = useContext(WeatherContext);

  const otherInfoWidgets = [
    {
      id: 0,
      icon: "droplet",
      name: "precipitation",
      value: Math.round(precipitation.total),
      unit: units.precipitation,
    },
    {
      id: 1,
      icon: "wind",
      name: "wind",
      value: Math.round(wind.speed),
      unit: units.wind_speed,
    },
    {
      id: 2,
      icon: "moisture",
      name: "humidity",
      value: Math.round(humidity),
      unit: units.humidity,
    },
    {
      id: 3,
      icon: "sunglasses",
      name: "UV index",
      value: Math.round(uv_index),
      unit: units.uv_index,
    },
    {
      id: 4,
      icon: "clouds-fill",
      name: "Clouds cover",
      value: Math.round(cloud_cover),
      unit: units.CurrentWeather,
    },
    {
      id: 5,
      icon: "eye",
      name: "visibility",
      value: Math.round(visibility),
      unit: "mi",
    },
  ];

  //   useEffect(function () {
  //     async function getLocation() {
  //       return new Promise((resolve, reject) => {
  //         if (navigator.geolocation) {
  //           navigator.geolocation.getCurrentPosition(
  //             (position) => {
  //               resolve({
  //                 latitude: position.coords.latitude,
  //                 longitude: position.coords.longitude,
  //               });
  //             },
  //             (error) => {
  //               reject(error);
  //             }
  //           );
  //         } else {
  //           reject(new Error("Give us location premision"));
  //         }
  //       });
  //     }

  //     async function fetchData() {
  //       const { latitude, longitude } = await getLocation();
  //       const weatherRes = await fetch(
  //         `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&timezone=GMT`
  //       );
  //       console.log(weatherRes);
  //       const weatherData = await weatherRes.json();
  //       console.log(weatherData);
  //     }

  //     fetchData();
  //   });

  return (
    <div className="CurrentWeather">
      <div className="temperature">
        <div className="weather-icon">
          <WeatherIcon iconNumber={icon_num} alt={summary} />
        </div>
        <div className="value">
          <div className="real">
            {temperature} {units.temperature}
          </div>
          <div className="feels_like">
            feels like {feels_like} 19.8 {units.temperature}
          </div>
        </div>
        <div className="summary">{summary}</div>
      </div>
      <div className="other-infos">
        {otherInfoWidgets.map(({ id, icon, name, value, unit }) => (
          <div className="widget" key={id}>
            <div className="widget-container">
              <div className="info">
                <div className="icon">
                  <i className={`bi bi-${icon}`}></i>
                </div>
                <div className="value">
                  {value} {unit}
                </div>
              </div>
              <div className="name">{name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
