import { Current, NewHourlyObject, Units, Weather } from "Types/types";

export const prepareHourlyForRendering = (hourlyData: Current[]): NewHourlyObject[] => {
  let array: NewHourlyObject[] = [];

  hourlyData.map((item) => {
    let obj: NewHourlyObject = Object.assign({}, item, {
      Humidity: Math.round(item.humidity),
      "Feels Like": Math.round(item.feels_like),
      Clouds: Math.round(item.clouds),
      Temperature: Math.round(item.temp),
      Precipitation: Math.round(item.pop),
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

export const degToCard = (deg: number) => {
  if (deg > 11.25 && deg <= 33.75) {
    return "NNE";
  } else if (deg > 33.75 && deg <= 56.25) {
    return "ENE";
  } else if (deg > 56.25 && deg <= 78.75) {
    return "E";
  } else if (deg > 78.75 && deg <= 101.25) {
    return "ESE";
  } else if (deg > 101.25 && deg <= 123.75) {
    return "ESE";
  } else if (deg > 123.75 && deg <= 146.25) {
    return "SE";
  } else if (deg > 146.25 && deg <= 168.75) {
    return "SSE";
  } else if (deg > 168.75 && deg <= 191.25) {
    return "S";
  } else if (deg > 191.25 && deg <= 213.75) {
    return "SSW";
  } else if (deg > 213.75 && deg <= 236.25) {
    return "SW";
  } else if (deg > 236.25 && deg <= 258.75) {
    return "WSW";
  } else if (deg > 258.75 && deg <= 281.25) {
    return "W";
  } else if (deg > 281.25 && deg <= 303.75) {
    return "WNW";
  } else if (deg > 303.75 && deg <= 326.25) {
    return "NW";
  } else if (deg > 326.25 && deg <= 348.75) {
    return "NNW";
  } else {
    return "N";
  }
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
