import { useAdditionalWeatherProperties } from "Context/useAdditionalWeatherProperties";
import { useWeather } from "Context/useWeather";
import dayjs from "dayjs";
import { useMemo } from "react";
import { Weather } from "Types/types";

const useDailyWeather = () => {
  const { lat, lon, currentTime } = useAdditionalWeatherProperties();
  const { weather } = useWeather();

  return useMemo(() => {
    return (weather.find((item: Weather) => item.lat === lat && item.lon === lon)?.daily || []).filter(
      (item) =>
        item.dt >=
        dayjs(currentTime * 1000)
          .startOf("day")
          .unix()
    );
  }, [currentTime, lat, lon, weather]);
};

export default useDailyWeather;
