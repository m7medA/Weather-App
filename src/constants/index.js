export const DEFAULT_PLACE = {
  name: "Cairo",
  place_id: "cairo",
  adm_area1: "Cairo Governorate",
  adm_area2: null,
  country: "Egypt",
  lat: "30.06263N",
  lon: "31.24967E",
  timezone: "Africa/Cairo",
  type: "settlement",
};

export const MEASUREMENT_SYSTEMS = {
  AUTO: "auto",
  METRIC: "metric",
  UK: "uk",
  US: "us",
  CA: "ca",
};

export const UNITS = {
  metric: {
    cloud_cover: "%",
    humidity: "%",
    precipitation: "mm/h",
    temperature: " °C",
    uv_index: "",
    visibility: "k/m",
    wind_speed: "m/s",
  },
  us: {
    cloud_cover: "%",
    humidity: "%",
    precipitation: "in/h",
    temperature: " °F",
    uv_index: "",
    visibility: "mi",
    wind_speed: "mph",
  },
  uk: {
    cloud_cover: "%",
    humidity: "%",
    precipitation: "mm/h",
    temperature: " °C",
    uv_index: "",
    visibility: "mi",
    wind_speed: "mph",
  },
  ca: {
    cloud_cover: "%",
    humidity: "%",
    precipitation: "mm/h",
    temperature: " °C",
    uv_index: "",
    visibility: "km",
    wind_speed: "km/h",
  },
};
