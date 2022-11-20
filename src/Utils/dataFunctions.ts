import { Current, NewHourlyObject, Units } from "Types/types";

export const prepareHourlyForRendering = (hourlyData: Current[]): NewHourlyObject[] => {
  let array: NewHourlyObject[] = [];

  hourlyData.map((item) => {
    let obj: NewHourlyObject = Object.assign({}, item, {
      Humidity: Math.round(item.humidity),
      "Feels Like": Math.round(item.feels_like),
      Clouds: Math.round(item.clouds),
      Temperature: Math.round(item.temp),
    });
    array.push(obj);
  });

  return array;
};

export const returnUnitSpeed = (unit: Units): string => {
  switch (unit) {
    case Units.imperial:
      return "mph";
    default:
      return "kph";
  }
};

export const returnUnitTemperature = (unit: Units): string => {
  switch (unit) {
    case Units.imperial:
      return "F";
    default:
      return "C";
  }
};

export const userLocationAvailable = () => {
  let userLocation = localStorage.getItem("location");
  return userLocation !== null;
};

export const setLatAndLong = (setLat: (latitude: Number) => void, setLong: (longitude: Number) => void) => {
  if (!userLocationAvailable()) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
        localStorage.setItem("location", JSON.stringify({ latitude: position.coords.latitude, longitude: position.coords.longitude }));
        return;
      },
      function (error) {
        console.log(error);
        return;
      },
      {
        maximumAge: 60000,
        timeout: 5000,
        enableHighAccuracy: true,
      }
    );
    return;
  }
  let userLocation = JSON.parse(localStorage.getItem("location") || "{}");
  setLat(userLocation.latitude);
  setLong(userLocation.longitude);
};

export const userWeatherDataAvailable = () => {
  let userWeather = localStorage.getItem("weather");
  return userWeather === null;
};
