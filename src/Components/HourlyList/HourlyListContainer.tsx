import { useStore } from "Context/useAppStore";
import HourlyList from "./HourlyList";

const HourlyListContainer = () => {
  const { hourly, units } = useStore();

  return <HourlyList hourly={hourly} units={units} />;
};

export default HourlyListContainer;
