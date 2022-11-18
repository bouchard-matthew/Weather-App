import React from "react";
import { useStore } from "Context/useAppStore";
import HourlyChart from "./HourlyChart";

const HourlyChartContainer = () => {
  const { hourly } = useStore();

  return <HourlyChart hourly={hourly} />;
};

export default HourlyChartContainer;
