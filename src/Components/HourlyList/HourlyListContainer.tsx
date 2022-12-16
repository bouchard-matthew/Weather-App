import { useStore } from "Context/useAppStore";
import { useHourlyWeather } from "Hooks/useHourlyWeather";
import HourlyList from "./HourlyList";

const HourlyListContainer = () => {
  const { units } = useStore();

  return <HourlyList hourly={useHourlyWeather() || []} units={units} />;
};

export default HourlyListContainer;
