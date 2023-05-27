import { Weather } from "Types/types";

const useAddWeather = (list: Weather[], data: Weather) => {
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

export default useAddWeather;
