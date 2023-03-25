import { useAdditionalWeatherProperties } from "Context/useAdditionalWeatherProperties";
import { useWeather } from "Context/useWeather";
import { Weather } from "Types/types";

const useDailyWeather = () => {
  const { lat, lon } = useAdditionalWeatherProperties();
  const { weather } = useWeather();
  return weather.find((item: Weather) => item.lat === lat && item.lon === lon)?.daily || [];
};

export default useDailyWeather;
