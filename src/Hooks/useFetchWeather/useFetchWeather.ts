import { useWeather } from "Context/useWeather";
import { useCallback, useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";

import { useAdditionalWeatherProperties } from "Context/useAdditionalWeatherProperties";

const useFetchWeather = () => {
  const { weather, setWeather } = useWeather();
  const { lat, lon, setLat, setLon, setCurrentTime } = useAdditionalWeatherProperties();

  const fetchWeather = useCallback(
    async (name: string, lat: number, lon: number) => setWeather((await axios.get(`/api/fetchWeather?lat=${lat}&lon=${lon}&name=${name}`)).data),
    [setWeather]
  );

  useEffect(() => {
    let currentTime = dayjs().unix();
    if (weather.length === 0 && lat && lon) fetchWeather("Home", lat, lon);
    else weather.forEach((item) => item.expiresAt < currentTime && fetchWeather(item.name, item.lat, item.lon));
  }, [fetchWeather, lat, lon, setCurrentTime, setLat, setLon, weather]);
};

export default useFetchWeather;
