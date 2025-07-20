import { useWeather } from "Context/useWeather";
import { useCallback, useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";

import { useAdditionalWeatherProperties } from "Context/useAdditionalWeatherProperties";
import { Weather } from "Types/types";

const useFetchWeather = () => {
  const { weather, setWeather } = useWeather();
  const { lat, lon, setLat, setLon } = useAdditionalWeatherProperties();

  const fetchWeather = useCallback(
    async (name: string, lat: number, lon: number) => {
      const url = `/api/fetchWeather?lat=${lat}&lon=${lon}&name=${name}`;
      const response = await axios.get<Weather>(url);

      setWeather(response.data);
      setLat(lat);
      setLon(lon);
    },
    [setLat, setLon, setWeather]
  );

  useEffect(() => {
    const currentTime = dayjs().unix();
    if (weather.length === 0 && lat && lon) {
      fetchWeather("Home", lat, lon);
    } else {
      weather.forEach((item) => {
        if (item.expiresAt < currentTime) {
          fetchWeather(item.name, item.lat, item.lon);
        }
      });
    }
  }, [fetchWeather, lat, lon, weather]);

  return { fetchWeather };
};

export default useFetchWeather;