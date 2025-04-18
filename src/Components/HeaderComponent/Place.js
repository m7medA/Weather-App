import { useContext, useState } from "react";
import WeatherContext from "../../context/weather.context";

export default function Place() {
  const { place } = useContext(WeatherContext);

  return (
    <div className="place">
      <i className="bi bi-geo-alt-fill"></i> <b>{place.name}</b> |{" "}
      {place.country}
    </div>
  );
}
