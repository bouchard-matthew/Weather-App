import { useWeather } from "Context/useWeather";
import { useCallback, useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";
import { setLatAndLong } from "Utils/dataFunctions";

import { useAdditionalWeatherProperties } from "Context/useAdditionalWeatherProperties";

const { REACT_APP_API_KEY } = process.env;

const useFetchWeather = () => {
  const { weather, setWeather } = useWeather();
  const { lat, lon, setLat, setLon, setCurrentTime } = useAdditionalWeatherProperties();

  const fetchWeather = useCallback(
    async (name: string, lat: number, lon: number) => {
      let res = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${REACT_APP_API_KEY}`);
      let data = Object.assign({}, res.data, { name, expiresAt: dayjs().add(1, "day").unix() });
      setWeather(data);
    },
    [setWeather]
  );

  useEffect(() => {
    weather.map((item) => item.expiresAt < dayjs().unix() && fetchWeather(item.name, item.lat, item.lon));

    if (!lat && !lon) {
      setLatAndLong(setLat, setLon);
    }

    if (weather.length === 0 && lat && lon) {
      fetchWeather("Home", lat, lon);
    }
  }, [fetchWeather, lat, lon, setCurrentTime, setLat, setLon, weather]);
};

export default useFetchWeather;
