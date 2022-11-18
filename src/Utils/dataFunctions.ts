import { HourlyObject, NewHourlyObject, Units } from "Types/types";
import axios from "axios";
import { useStore } from "Context/useAppStore";
const { lat, long, setLat, setLong, units } = useStore();
const { REACT_APP_API_KEY } = process.env;

export const prepareHourlyForRendering = (hourlyData: HourlyObject[]): NewHourlyObject[] => {
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

export const fetchWeatherData = async () => {
  let weather = await axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely&appid=${REACT_APP_API_KEY}&units=${units}`
  );

  return weather;
};
