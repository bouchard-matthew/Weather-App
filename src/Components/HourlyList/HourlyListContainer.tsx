import { useAdditionalWeatherProperties } from "Context/useAdditionalWeatherProperties";
import { useHourlyWeather } from "Hooks/useHourlyWeather";
import HourlyList from "./HourlyList";

const HourlyListContainer = () => {
  const { units, loading } = useAdditionalWeatherProperties();

  return <HourlyList hourly={useHourlyWeather()} units={units} loading={loading} />;
};

export default HourlyListContainer;
