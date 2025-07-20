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
  const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${API_KEY}`;
  const res = await axios.get(url);

  return {
    ...res.data,
    name,
    expiresAt: dayjs().add(1, "day").unix(),
  };
};

const getCoordinatesFromZip = async ({ zip }: GetCoordinatesFromZipOptions): Promise<GetCoordinatesFromZip> => {
  const url = `http://api.openweathermap.org/geo/1.0/zip?zip=${zip},US&appid=${API_KEY}`;
  let res = await axios.get(url);

  return {
    lat: res.data.lat,
    lon: res.data.lon,
    name: res.data.name,
  };
};

const openWeatherMapClient = {
  getWeather,
  getCoordinatesFromZip,
} as const;

export { openWeatherMapClient };
