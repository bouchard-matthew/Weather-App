import { useAdditionalWeatherProperties } from "Context/useAdditionalWeatherProperties";
import { useHourlyWeather } from "Hooks/useHourlyWeather";
import HourlyList from "./HourlyList";

const HourlyListContainer = () => {
  const { units } = useAdditionalWeatherProperties();

  return <HourlyList hourly={useHourlyWeather()} units={units} />;
};

export default HourlyListContainer;
