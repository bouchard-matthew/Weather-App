import { useState } from "react";
import HourlyChart from "./HourlyChart";
import { useHourlyChartData } from "Hooks/useHourlyChartData";
import { useHourlyWeather } from "Hooks/useHourlyWeather";

const HourlyChartContainer = () => {
  const [toggle, setToggle] = useState<Boolean>(false);

  return <HourlyChart hourly={useHourlyChartData(useHourlyWeather())} toggle={toggle} handleClick={setToggle} />;
};

export default HourlyChartContainer;
