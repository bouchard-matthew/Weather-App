import { useAdditionalWeatherProperties } from "Context/useAdditionalWeatherProperties";
import { useDailyWeather } from "Hooks/useDailyWeather";
import DailyList from "./DailyList";

const DailyListContainer = () => {
  const { loading } = useAdditionalWeatherProperties();

  return <DailyList daily={useDailyWeather()} loading={loading} />;
};

export default DailyListContainer;
