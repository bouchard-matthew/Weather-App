import { useStore } from "Context/useAppStore";
import { useState, useEffect } from "react";
import HourlyChart from "./HourlyChart";

const HourlyChartContainer = () => {
  const { hourly } = useStore();
  const [toggle, setToggle] = useState<Boolean>(false);

  useEffect(() => {}, [hourly]);

  return <HourlyChart hourly={hourly} toggle={toggle} handleClick={setToggle} />;
};

export default HourlyChartContainer;
