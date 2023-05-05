import { useAdditionalWeatherProperties } from "Context/useAdditionalWeatherProperties";
import { useWeather } from "Context/useWeather";
import { useMemo } from "react";
import { Weather } from "Types/types";

const useTimeZoneString = () => {
  const { lat, lon } = useAdditionalWeatherProperties();
  const { weather } = useWeather();

  return useMemo(() => {
    return weather.find((item: Weather) => item.lat === lat && item.lon === lon)?.timezone || "";
  }, [lat, lon, weather]);
};

export default useTimeZoneString;
