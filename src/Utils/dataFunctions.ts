import { HourlyObject, NewHourlyObject } from "../Types/types";

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
