import { Current, NewHourlyObject, Units, Weather } from "Types/types";

const convertTemperature = (temp: number, units: Units) => {
  switch (units) {
    case Units.imperial:
      return Math.round(((temp - 273.15) * 9) / 5 + 32);
    case Units.metric:
      return Math.round(temp - 273.15);
    default:
      return Math.round(temp);
  }
};

export const returnHourlyChartData = (hourlyData: Current[], units: Units): NewHourlyObject[] => {
  let array: NewHourlyObject[] = [];

  hourlyData.map((item) =>
    array.push(
      Object.assign({}, item, {
        Humidity: Math.round(item.humidity),
        "Feels Like": convertTemperature(item.feels_like, units),
        Clouds: Math.round(item.clouds),
        Temperature: convertTemperature(item.temp, units),
        Precipitation: Math.round(item.pop * 100),
      })
    )
  );

  return array;
};

export const handleWeatherAppend = (list: Weather[], data: Weather) => {
  let temp = [...list];
  let match = list.findIndex((item) => item.lat === data.lat && item.lon === data.lon);

  if (match > -1) {
    temp[match] = data;
    return temp;
  } else if (list.length === 3) {
    temp[2] = data;
    return temp;
  }

  return [...temp, data];
};

export const setLatAndLong = (setLat: (latitude: number) => void, setLong: (longitude: number) => void) => {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
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
};
