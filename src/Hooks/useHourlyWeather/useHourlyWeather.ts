import dayjs from "dayjs";
import { useMemo } from "react";
import { useAdditionalWeatherProperties } from "Context/useAdditionalWeatherProperties";
import { useWeather } from "Context/useWeather";
import { Weather } from "Types/types";

const useHourlyWeather = () => {
  const { lat, lon, currentTime } = useAdditionalWeatherProperties();
  const { weather } = useWeather();

  return useMemo(() => {
    return (weather.find((item: Weather) => item.lat === lat && item.lon === lon)?.hourly || []).filter(
      (item) =>
        item.dt >=
        dayjs(currentTime * 1000)
          .startOf("hour")
          .unix()
    );
  }, [currentTime, lat, lon, weather]);
};

export default useHourlyWeather;
