import { useStore } from "Context/useAppStore";
import { useDailyWeather } from "Hooks/useDailyWeather";
import DailyList from "./DailyList";

const DailyListContainer = () => {
  const { loading } = useStore();

  return <DailyList daily={useDailyWeather()} loading={loading} />;
};

export default DailyListContainer;
