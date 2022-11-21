import { Current, NewHourlyObject, Units, Weather } from "Types/types";

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

/* prepDataForWeatherArray accepts the following parameters:
// - Data (new weather object)
// - Arr (current weatherArray state variable) 
// ... and returns the new weatherArray
*/
export const prepDataForWeatherArray = (data: Weather, arr: Weather[]) => {
  let temp = [...arr];
  let idx = temp.findIndex((item) => item.lat == data.lat && item.long == data.long);

  if (idx > -1) {
    // If weather object is already in the weatherArray and updates the record
    temp[idx] = data;
    return temp;
  } else if ([...temp, data].length > 5) {
    // If adding the new weather object (data) ends up having length > 5, then it will remove last object and append data
    temp.pop();
    return [...temp, data];
  }

  // If no problem, the new weather object (data) will just be appended to the weather array
  return [...temp, data];
};
