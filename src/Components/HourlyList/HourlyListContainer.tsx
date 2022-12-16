import { useStore } from "Context/useAppStore";
import { useHourlyWeather } from "Hooks/useHourlyWeather";
import HourlyList from "./HourlyList";

const HourlyListContainer = () => {
  const { units, loading } = useStore();

  return <HourlyList hourly={useHourlyWeather()} units={units} loading={loading} />;
};

export default HourlyListContainer;
