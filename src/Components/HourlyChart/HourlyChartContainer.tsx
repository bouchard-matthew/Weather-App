import { useStore } from "Context/useAppStore";
import { useHourlyWeather } from "Hooks/useHourlyWeather";
import { useState } from "react";
import HourlyChart from "./HourlyChart";

const HourlyChartContainer = () => {
  const { units, loading } = useStore();
  const [toggle, setToggle] = useState<Boolean>(false);

  return <HourlyChart hourly={useHourlyWeather() || []} toggle={toggle} handleClick={setToggle} units={units} loading={loading} />;
};

export default HourlyChartContainer;
