import { useMemo } from "react";
import { useStore } from "Context/useAppStore";
import { Units } from "Types/types";

interface Item {
  feels_like: number;
}

const useUnitTemperature = (item: Item) => {
  const { units } = useStore();
  const temperature = item.feels_like;

  return useMemo(() => {
    if (units === Units.imperial) return `${Math.round(((temperature - 273.15) * 9) / 5 + 32)}° F`;
    else if (units === Units.metric) return `${Math.round(temperature - 273.15)}° C`;
    else return `${Math.round(temperature)}° K`;
  }, [temperature, units]);
};

export default useUnitTemperature;
