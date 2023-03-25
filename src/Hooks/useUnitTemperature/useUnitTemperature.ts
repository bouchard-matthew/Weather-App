import { useMemo } from "react";
import { useAdditionalWeatherProperties } from "Context/useAdditionalWeatherProperties";
import { Units } from "Types/types";

const useUnitTemperature = (temperature: number) => {
  const { units } = useAdditionalWeatherProperties();

  return useMemo(() => {
    if (units === Units.imperial) return `${Math.round(((temperature - 273.15) * 9) / 5 + 32)}° F`;
    else if (units === Units.metric) return `${Math.round(temperature - 273.15)}° C`;
    else return `${Math.round(temperature)}° K`;
  }, [temperature, units]);
};

export default useUnitTemperature;
