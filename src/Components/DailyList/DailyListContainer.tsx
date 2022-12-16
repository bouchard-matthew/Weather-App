import { useStore } from "Context/useAppStore";
import { useDailyWeather } from "Hooks/useDailyWeather";
import DailyList from "./DailyList";

const DailyListContainer = () => {
  const { units, loading } = useStore();

  return <DailyList daily={useDailyWeather()} units={units} loading={loading} />;
};

export default DailyListContainer;
