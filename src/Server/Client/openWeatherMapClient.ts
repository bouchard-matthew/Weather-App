import { Weather } from "Types/types";
import { API_KEY } from "Server/Constants/environmentVariables";
import axios from "axios";
import dayjs from "dayjs";

interface GetWeatherOptions {
  lat: number;
  lon: number;
  name: string;
}

interface GetCoordinatesFromZip {
  lat: number;
  lon: number;
  name: string;
}

interface GetCoordinatesFromZipOptions {
  zip: string;
}

const getWeather = async ({ lat, lon, name }: GetWeatherOptions): Promise<Weather> => {
  console.log(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${API_KEY}`);
  const res = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${API_KEY}`);

  return {
    ...res.data,
    name,
    expiresAt: dayjs().add(1, "day").unix(),
  };
};

const getCoordinatesFromZip = async ({ zip }: GetCoordinatesFromZipOptions): Promise<GetCoordinatesFromZip> => {
  console.log(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${API_KEY}`);
  let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${API_KEY}`);

  return {
    lat: res.data.coord.lat,
    lon: res.data.coord.lon,
    name: res.data.name,
  };
};

const openWeatherMapClient = {
  getWeather,
  getCoordinatesFromZip,
} as const;

export { openWeatherMapClient };
