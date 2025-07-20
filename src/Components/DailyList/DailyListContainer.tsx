import { useDailyWeather } from "Hooks/useDailyWeather";
import DailyList from "./DailyList";

const DailyListContainer = () => {
  
  return <DailyList daily={useDailyWeather()} />;
};

export default DailyListContainer;
