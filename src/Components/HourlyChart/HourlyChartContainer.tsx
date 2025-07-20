import { useState } from "react";
import HourlyChart from "./HourlyChart";
import { useHourlyChartData } from "Hooks/useHourlyChartData";
import { useHourlyWeather } from "Hooks/useHourlyWeather";
import { ClientGate } from "Components/ClientGate";

const HourlyChartContainer = () => {
  const [toggle, setToggle] = useState<Boolean>(false);

  return (
    <ClientGate>
      <HourlyChart hourly={useHourlyChartData(useHourlyWeather())} toggle={toggle} handleClick={setToggle} />
    </ClientGate>
  );
};

export default HourlyChartContainer;
