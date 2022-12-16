import { useStore } from "Context/useAppStore";
import { useDailyWeather } from "Hooks/useDailyWeather";
import DailyList from "./DailyList";

const DailyListContainer = () => {
  const { units } = useStore();

  return <DailyList daily={useDailyWeather() || []} units={units} />;
};

export default DailyListContainer;
