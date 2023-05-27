import { useMemo } from "react";
import { useAdditionalWeatherProperties } from "Context/useAdditionalWeatherProperties";
import { Units } from "Types/types";

const useUnitTemperature = (temperature: number) => {
  const { units } = useAdditionalWeatherProperties();
  const deg = temperature;
  return useMemo(() => {
    const map = {
      [Units.imperial]: `${Math.round(((deg - 273.15) * 9) / 5 + 32)}° F`,
      [Units.metric]: `${Math.round(deg - 273.15)}° C`,
      [Units.standard]: `${Math.round(deg)}° K`,
    };
    return map[units];
  }, [deg, units]);
};

export default useUnitTemperature;
