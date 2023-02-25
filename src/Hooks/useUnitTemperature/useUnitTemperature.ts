import { useMemo } from "react";
import { useStore } from "Context/useAppStore";
import { Units } from "Types/types";

const useUnitTemperature = (temperature: number) => {
  const { units } = useStore();

  return useMemo(() => {
    if (units === Units.imperial) return `${Math.round(((temperature - 273.15) * 9) / 5 + 32)}° F`;
    else if (units === Units.metric) return `${Math.round(temperature - 273.15)}° C`;
    else return `${Math.round(temperature)}° K`;
  }, [temperature, units]);
};

export default useUnitTemperature;
