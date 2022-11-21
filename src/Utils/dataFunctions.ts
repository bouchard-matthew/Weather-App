import { Current, NewHourlyObject, Units, Weather } from "Types/types";

export const prepareHourlyForRendering = (hourlyData: Current[]): NewHourlyObject[] => {
  let array: NewHourlyObject[] = [];

  hourlyData.map((item) => {
    let obj: NewHourlyObject = Object.assign({}, item, {
      Humidity: Math.round(item.humidity),
      "Feels Like": Math.round(item.feels_like),
      Clouds: Math.round(item.clouds),
      Temperature: Math.round(item.temp),
      Precipitation: Math.round(item.pop * 100),
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
    case Units.metric:
      return "C";
    default:
      return "K";
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

export const degToCard = (deg: number) => {
  switch (true) {
    case deg > 11.25 && deg <= 33.75:
      return "NNE";
    case deg > 33.75 && deg <= 56.25:
      return "ENE";
    case deg > 56.25 && deg <= 78.75:
      return "E";
    case deg > 78.75 && deg <= 101.25:
      return "ESE";
    case deg > 101.25 && deg <= 123.75:
      return "ESE";
    case deg > 123.75 && deg <= 146.25:
      return "SE";
    case deg > 146.25 && deg <= 168.75:
      return "SSE";
    case deg > 168.75 && deg <= 191.25:
      return "S";
    case deg > 191.25 && deg <= 213.75:
      return "SSW";
    case deg > 213.75 && deg <= 236.25:
      return "SW";
    case deg > 236.25 && deg <= 258.75:
      return "WSW";
    case deg > 258.75 && deg <= 281.25:
      return "W";
    case deg > 281.25 && deg <= 303.75:
      return "WNW";
    case deg > 303.75 && deg <= 326.25:
      return "NW";
    case deg > 326.25 && deg <= 348.75:
      return "NNW";
    default:
      return "N";
  }
};

export const prepDataForWeatherArray = (data: Weather, arr: Weather[]) => {
  let lsData = JSON.parse(localStorage.getItem("weatherData") || "[]");
  let temp;
  let idx;

  if (lsData === null || lsData.length === 0) {
    temp = [...arr];
  } else {
    temp = [...lsData];
  }

  idx = temp.findIndex((item) => item.lat === data.lat && item.long === data.long);

  if (idx > -1) {
    temp[idx] = data;
    localStorage.setItem("weatherData", JSON.stringify(temp));
    return temp;
  } else if ([...temp, data].length > 3) {
    temp.pop();
    localStorage.setItem("weatherData", JSON.stringify([...temp, data]));
    return [...temp, data];
  }

  localStorage.setItem("weatherData", JSON.stringify([...temp, data]));
  return [...temp, data];
};
