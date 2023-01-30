import { useStore } from "Context/useAppStore";
import React from "react";
import { Weather } from "Types/types";

const useToday = () => {
  const { weather, lat, lon } = useStore();

  return weather.find((item: Weather) => item.lat === lat && item.lon === lon)?.daily[0];
};

export default useToday;
