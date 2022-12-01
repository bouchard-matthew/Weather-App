import { useStore } from "Context/useAppStore";
import DailyList from "./DailyList";

const DailyListContainer = () => {
  const { daily, units } = useStore();
  return <DailyList daily={daily} units={units} />;
};

export default DailyListContainer;
