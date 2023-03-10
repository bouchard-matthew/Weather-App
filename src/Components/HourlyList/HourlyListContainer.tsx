import { useStore } from "Context/useAppStore";
import { useHourlyWeather } from "Hooks/useHourlyWeather";
import HourlyList from "./HourlyList";

const HourlyListContainer = () => {
  const { units, loading } = useStore();

  // Look into timer hooks that run every "X" many minutes. Use that information to omit non-current / relavent data

  return <HourlyList hourly={useHourlyWeather()} units={units} loading={loading} />;
};

export default HourlyListContainer;
