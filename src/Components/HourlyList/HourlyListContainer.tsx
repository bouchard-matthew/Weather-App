import { useStore } from "Context/useAppStore";
import { useEffect } from "react";
import HourlyList from "./HourlyList";

const HourlyListContainer = () => {
  const { hourly, units } = useStore();

  useEffect(() => {}, [hourly]);

  return <HourlyList hourly={hourly} units={units} />;
};

export default HourlyListContainer;
